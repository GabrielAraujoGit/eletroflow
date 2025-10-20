import { useState } from "react";

export default function NovoOrcamento() {
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const [itens, setItens] = useState([]);
  const [clienteId, setClienteId] = useState("");

  const addItem = (produto) => {
    setItens([...itens, { ...produto, qtd: 1 }]);
  };

  const total = itens.reduce((acc, i) => acc + i.preco * i.qtd, 0);

  const salvarOrcamento = () => {
    const orcamentos = JSON.parse(localStorage.getItem("orcamentos")) || [];
    orcamentos.push({
      id: Date.now(),
      clienteId,
      itens,
      total,
      data: new Date().toLocaleDateString(),
    });
    localStorage.setItem("orcamentos", JSON.stringify(orcamentos));
    alert("Orçamento salvo!");
    setItens([]);
  };

  return (
    <div>
      <h2>Novo Orçamento</h2>

      <select onChange={(e) => setClienteId(e.target.value)} value={clienteId}>
        <option value="">Selecione o cliente</option>
        {clientes.map((c) => (
          <option key={c.id} value={c.id}>{c.nome}</option>
        ))}
      </select>

      <h3>Produtos disponíveis</h3>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco.toFixed(2)}
            <button onClick={() => addItem(p)}>Adicionar</button>
          </li>
        ))}
      </ul>

      <h3>Itens do orçamento</h3>
      <ul>
        {itens.map((i, idx) => (
          <li key={idx}>
            {i.nome} x{i.qtd} — R$ {(i.preco * i.qtd).toFixed(2)}
          </li>
        ))}
      </ul>

      <h4>Total: R$ {total.toFixed(2)}</h4>
      <button onClick={salvarOrcamento} disabled={!clienteId || itens.length === 0}>
        Salvar Orçamento
      </button>
    </div>
  );
}
