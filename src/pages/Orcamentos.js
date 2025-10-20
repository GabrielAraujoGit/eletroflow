export default function Orcamentos() {
  const orcamentos = JSON.parse(localStorage.getItem("orcamentos")) || [];
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  const remover = (id) => {
    const novos = orcamentos.filter((o) => o.id !== id);
    localStorage.setItem("orcamentos", JSON.stringify(novos));
    window.location.reload();
  };

  const nomeCliente = (id) => clientes.find((c) => c.id === id)?.nome || "Desconhecido";

  return (
    <div>
      <h2>Orçamentos</h2>
      {orcamentos.length === 0 ? (
        <p>Nenhum orçamento cadastrado.</p>
      ) : (
        <ul>
          {orcamentos.map((o) => (
            <li key={o.id}>
              Cliente: {nomeCliente(o.clienteId)} — Total: R$ {o.total.toFixed(2)} ({o.data})
              <button onClick={() => remover(o.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
