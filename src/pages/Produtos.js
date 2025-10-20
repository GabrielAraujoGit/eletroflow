import { useState, useEffect } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState(() =>
    JSON.parse(localStorage.getItem("produtos")) || []
  );
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  const addProduto = (e) => {
    e.preventDefault();
    setProdutos([...produtos, { id: Date.now(), nome, preco: parseFloat(preco) }]);
    setNome("");
    setPreco("");
  };

  const remover = (id) => setProdutos(produtos.filter((p) => p.id !== id));

  return (
    <div>
      <h2>Produtos</h2>
      <form onSubmit={addProduto}>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do Produto" required />
        <input value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço" type="number" required />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco.toFixed(2)}
            <button onClick={() => remover(p.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
