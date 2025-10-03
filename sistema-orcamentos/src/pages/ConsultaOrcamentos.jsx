export default function ConsultaOrcamentos() {
  const orcamentos = [
    { numero: "ORC-0001", cliente: "Empresa Alpha", total: "R$ 500,00", status: "Em Aberto" },
    { numero: "ORC-0002", cliente: "Empresa Beta", total: "R$ 300,00", status: "Aprovado" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Em Aberto": return "text-blue-600";
      case "Aprovado": return "text-green-600";
      case "Rejeitado": return "text-red-600";
      case "Cancelado": return "text-orange-600";
      default: return "";
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Consultar Orçamentos</h2>
      <table className="w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th>Número</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orcamentos.map(o => (
            <tr key={o.numero} className="text-center border-t">
              <td>{o.numero}</td>
              <td>{o.cliente}</td>
              <td>{o.total}</td>
              <td className={getStatusColor(o.status)}>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
