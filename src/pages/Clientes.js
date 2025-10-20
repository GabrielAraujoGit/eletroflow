import { useState, useEffect } from "react";
import "./Clientes.css";

export default function Clientes() {
  const [clientes, setClientes] = useState(() =>
    JSON.parse(localStorage.getItem("clientes")) || []
  );
  const [busca, setBusca] = useState("");
  const [form, setForm] = useState({
    id: "",
    razao: "",
    cnpj: "",
    cidade: "",
    telefone: "",
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  const limparForm = () => {
    setForm({ id: "", razao: "", cnpj: "", cidade: "", telefone: "" });
    setModoEdicao(false);
  };

  const salvarCliente = (e) => {
    e.preventDefault();
    if (modoEdicao) {
      setClientes(
        clientes.map((c) => (c.id === form.id ? form : c))
      );
    } else {
      setClientes([
        ...clientes,
        { ...form, id: Date.now() },
      ]);
    }
    limparForm();
  };

  const editarCliente = (cliente) => {
    setForm(cliente);
    setModoEdicao(true);
  };

  const excluirCliente = (id) => {
    if (window.confirm("Deseja excluir este cliente?")) {
      setClientes(clientes.filter((c) => c.id !== id));
    }
  };

  const importarArquivo = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const dados = JSON.parse(evt.target.result);
        setClientes([...clientes, ...dados]);
      } catch {
        alert("Arquivo inválido. Use um JSON válido.");
      }
    };
    reader.readAsText(file);
  };

  const clientesFiltrados = clientes.filter((c) =>
    c.razao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="clientes-container">
      <h2>Clientes</h2>

      {/* 🔍 Barra de busca */}
      <div className="acoes">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button onClick={() => setBusca("")}>Limpar</button>
        <label className="importar">
          Importar Arquivo
          <input type="file" accept=".json" onChange={importarArquivo} />
        </label>
      </div>

      {/* 🧾 Formulário */}
      <form className="form-cliente" onSubmit={salvarCliente}>
        <input
          type="text"
          placeholder="Razão Social"
          value={form.razao}
          onChange={(e) => setForm({ ...form, razao: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="CNPJ"
          value={form.cnpj}
          onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Cidade"
          value={form.cidade}
          onChange={(e) => setForm({ ...form, cidade: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
          required
        />

        <div className="botoes">
          <button type="submit">
            {modoEdicao ? "Salvar Edição" : "Adicionar"}
          </button>
          {modoEdicao && <button onClick={limparForm}>Cancelar</button>}
        </div>
      </form>

      {/* 📋 Lista de clientes */}
      <table className="tabela-clientes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Cidade</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.length === 0 ? (
            <tr>
              <td colSpan="6">Nenhum cliente encontrado.</td>
            </tr>
          ) : (
            clientesFiltrados.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.razao}</td>
                <td>{c.cnpj}</td>
                <td>{c.cidade}</td>
                <td>{c.telefone}</td>
                <td>
                  <button onClick={() => editarCliente(c)}>Editar</button>
                  <button onClick={() => excluirCliente(c.id)}>Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
