import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/usuarios">Usuarios</Link>
      <Link to="/equipos">Equipos</Link>
      <Link to="/capacitaciones">Capacitaciones</Link>
      <Link to="/resultados">Resultados</Link>
    </nav>
  )
}