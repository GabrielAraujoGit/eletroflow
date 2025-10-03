export default function Produtos() {
  const produtos = [
    { id: 1, codigo: "P001", descricao: "Produto A", tipo: "Eletrônico", valor: "R$ 100,00" },
    { id: 2, codigo: "P002", descricao: "Produto B", tipo: "Mecânico", valor: "R$ 200,00" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>
      <div className="flex gap-2 mb-4">
        <button className="bg-green-600 text-white px-3 py-1 rounded">Adicionar</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Editar</button>
        <button className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
      </div>
      <table className="w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Código</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(p => (
            <tr key={p.id} className="text-center border-t">
              <td>{p.id}</td>
              <td>{p.codigo}</td>
              <td>{p.descricao}</td>
              <td>{p.tipo}</td>
              <td>{p.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
