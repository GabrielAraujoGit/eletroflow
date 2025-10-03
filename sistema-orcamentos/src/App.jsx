import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import Orcamentos from "./pages/Orcamentos";
import ConsultaOrcamentos from "./pages/ConsultaOrcamentos";

export default function App() {
  return (
    <Router>
      <div className="flex">
        {/* Menu lateral */}
        <nav className="w-60 bg-gray-800 text-white min-h-screen p-4">
          <h1 className="text-lg font-bold mb-6">Sistema de Orçamentos</h1>
          <ul className="space-y-3">
            <li><Link to="/clientes">👤 Clientes</Link></li>
            <li><Link to="/produtos">📦 Produtos</Link></li>
            <li><Link to="/orcamentos">📝 Orçamentos</Link></li>
            <li><Link to="/consulta">🔍 Consultar Orçamentos</Link></li>
          </ul>
        </nav>

        {/* Conteúdo principal */}
        <main className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/orcamentos" element={<Orcamentos />} />
            <Route path="/consulta" element={<ConsultaOrcamentos />} />
            <Route path="*" element={<h2>Bem-vindo! Escolha uma opção no menu.</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
