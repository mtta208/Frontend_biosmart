import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Dashboard from "./pages/Dashboard";





function Equipos() {
  return <h1>Equipos</h1>;
}

function Capacitaciones() {
  return <h1>Capacitaciones</h1>;
}

function Resultados() {
  return <h1>Resultados</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        
        <aside
          style={{
            width: "220px",
            background: "#1e293b",
            color: "white",
            padding: "20px",
          }}
        >
          <h2>Biosmart</h2>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <Link style={linkStyle} to="/">
              Dashboard
            </Link>

            <Link style={linkStyle} to="/usuarios">
              Usuarios
            </Link>

            <Link style={linkStyle} to="/equipos">
              Equipos
            </Link>

            <Link style={linkStyle} to="/capacitaciones">
              Capacitaciones
            </Link>

            <Link style={linkStyle} to="/resultados">
              Resultados
            </Link>
          </nav>
        </aside>

        <main
          style={{
            flex: 1,
            padding: "30px",
            background: "#f1f5f9",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
            <Route path="/resultados" element={<Resultados />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

export default App;