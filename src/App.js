import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import NovoOrcamento from "./pages/NovoOrcamento";
import Orcamentos from "./pages/Orcamentos";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/novo-orcamento" element={<NovoOrcamento />} />
          <Route path="/orcamentos" element={<Orcamentos />} />
        </Routes>
      </div>
    </Router>
  );
}
