export default function Clientes() {
  const clientes = [
    { id: 1, razao: "Empresa Alpha", cnpj: "00.000.000/0001-00", cidade: "São Paulo", telefone: "(11) 99999-0000" },
    { id: 2, razao: "Empresa Beta", cnpj: "11.111.111/0001-11", cidade: "Rio de Janeiro", telefone: "(21) 98888-1111" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      <div className="flex gap-2 mb-4">
        <button className="bg-green-600 text-white px-3 py-1 rounded">Adicionar</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Editar</button>
        <button className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
      </div>
      <table className="w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Cidade</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(c => (
            <tr key={c.id} className="text-center border-t">
              <td>{c.id}</td>
              <td>{c.razao}</td>
              <td>{c.cnpj}</td>
              <td>{c.cidade}</td>
              <td>{c.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
