import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>EletroFlow</h1>
      <ul>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/novo-orcamento">Novo Orçamento</Link></li>
        <li><Link to="/orcamentos">Orçamentos</Link></li>
      </ul>
    </nav>
  );
}
