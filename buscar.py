import requests
import tkinter as tk
from tkinter import messagebox

def buscar_cnpj(cnpj, entries):
    """
    Busca dados de um CNPJ na API pública e preenche automaticamente os campos do formulário.
    Parâmetros:
        cnpj (str): número do CNPJ (com ou sem pontuação)
        entries (dict): dicionário com os campos Entry do formulário
    """
    cnpj = ''.join(filter(str.isdigit, str(cnpj)))  # remove tudo que não é número
    if len(cnpj) != 14:
        messagebox.showwarning("CNPJ inválido", "Digite um CNPJ com 14 dígitos.")
        return

    try:
        resposta = requests.get(f"https://publica.cnpj.ws/cnpj/{cnpj}", timeout=10)
        if resposta.status_code != 200:
            messagebox.showerror("Erro", "Não foi possível consultar o CNPJ.")
            return

        dados = resposta.json()
        if not dados.get("razao_social"):
            messagebox.showwarning("Aviso", "CNPJ não encontrado.")
            return

        # Mapeamento dos campos da API para o formulário
        mapeamento = {
            "razao_social": "razao_social",
            "nome_fantasia": "nome_fantasia",
            "logradouro": "endereco",
            "cep": "cep",
            "municipio": "cidade",
            "uf": "estado",
            "telefone1": "telefone",
            "email": "email"
        }

        for origem, destino in mapeamento.items():
            valor = dados.get(origem)
            if valor and destino in entries:
                entries[destino].delete(0, tk.END)
                entries[destino].insert(0, str(valor))

        messagebox.showinfo("Sucesso", "Dados do CNPJ preenchidos com sucesso!")

    except Exception as e:
        messagebox.showerror("Erro", f"Falha ao buscar CNPJ:\n{e}")
