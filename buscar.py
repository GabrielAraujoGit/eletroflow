def buscar_cnpj(cnpj, entries):
    """Busca dados do CNPJ em API pública e preenche os campos."""
    cnpj = ''.join(filter(str.isdigit, str(cnpj)))
    if len(cnpj) != 14:
        messagebox.showwarning("CNPJ inválido", "Digite um CNPJ com 14 dígitos.")
        return

    try:
        resposta = requests.get(f"https://publica.cnpj.ws/cnpj/{cnpj}")
        if resposta.status_code != 200:
            messagebox.showerror("Erro", "Não foi possível buscar o CNPJ.")
            return

        dados = resposta.json()
        if "razao_social" not in dados:
            messagebox.showwarning("Aviso", "CNPJ não encontrado na base pública.")
            return

        # Preenche automaticamente os campos
        mapeamento = {
            "razao_social": "nome",
            "nome_fantasia": "razao_social",
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

        messagebox.showinfo("Sucesso", "Dados do CNPJ preenchidos automaticamente!")

    except Exception as e:
        messagebox.showerror("Erro", f"Erro ao buscar CNPJ: {e}")
