export default function Table({ columns, data }) {
  return (
    <table className="w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200">
          {columns.map(col => (
            <th key={col} className="px-2 py-1 text-left">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            {columns.map(col => (
              <td key={col} className="px-2 py-1">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
