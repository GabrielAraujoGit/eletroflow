export default function Orcamentos() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Novo Orçamento</h2>
      <form className="space-y-3 bg-white p-4 rounded shadow">
        <div>
          <label className="block">Representante</label>
          <input type="text" className="border w-full p-1" placeholder="Digite o nome" />
        </div>
        <div>
          <label className="block">Cliente</label>
          <input type="text" className="border w-full p-1" placeholder="Selecione o cliente" />
        </div>
        <div>
          <label className="block">Produto</label>
          <input type="text" className="border w-full p-1" placeholder="Selecione o produto" />
        </div>
        <div>
          <label className="block">Quantidade</label>
          <input type="number" className="border w-full p-1" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Salvar Orçamento</button>
      </form>
    </div>
  );
}
