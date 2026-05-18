import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Equipos from "./pages/Equipos";
import Capacitaciones from "./pages/Capacitaciones";
import Examen from "./pages/Examen";
import Resultado from "./pages/Resultados";

import RutaProtegida from "./routes/RutaProtegida";

function Layout() {

  const navigate = useNavigate();

  const usuario =
    JSON.parse(
      localStorage.getItem("usuario")
    );

  function cerrarSesion() {

    localStorage.removeItem("usuario");

    navigate("/");
  }

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >

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

          {/* ADMIN */}
          {usuario?.rol === "ADMIN" && (
            <>
              <Link
                style={linkStyle}
                to="/dashboard"
              >
                Dashboard
              </Link>

              <Link
                style={linkStyle}
                to="/usuarios"
              >
                Usuarios
              </Link>
            </>
          )}

          {/* TODOS */}
          <Link
            style={linkStyle}
            to="/equipos"
          >
            Equipos
          </Link>

          <Link
            style={linkStyle}
            to="/capacitaciones"
          >
            Capacitaciones
          </Link>

          {/* PROFESOR Y ADMIN */}
          {(usuario?.rol === "PROFESOR" ||
            usuario?.rol === "ADMIN") && (
            <Link
              style={linkStyle}
              to="/resultado"
            >
              Resultado
            </Link>
          )}

          <button
            onClick={cerrarSesion}
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              background: "#ef4444",
              color: "white",
              cursor: "pointer",
            }}
          >
            Cerrar sesión
          </button>

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

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <RutaProtegida
                rolesPermitidos={[
                  "ADMIN",
                ]}
              >
                <Dashboard />
              </RutaProtegida>
            }
          />

          {/* USUARIOS */}
          <Route
            path="/usuarios"
            element={
              <RutaProtegida
                rolesPermitidos={[
                  "ADMIN",
                ]}
              >
                <Usuarios />
              </RutaProtegida>
            }
          />

          {/* EQUIPOS */}
          <Route
            path="/equipos"
            element={
              <RutaProtegida
                rolesPermitidos={[
                  "USUARIO",
                  "PROFESOR",
                  "ADMIN",
                ]}
              >
                <Equipos />
              </RutaProtegida>
            }
          />

          {/* CAPACITACIONES */}
          <Route
            path="/capacitaciones"
            element={
              <RutaProtegida
                rolesPermitidos={[
                  "USUARIO",
                  "PROFESOR",
                  "ADMIN",
                ]}
              >
                <Capacitaciones />
              </RutaProtegida>
            }
          />

          {/* EXAMEN */}
          <Route
            path="/examen"
            element={
              <RutaProtegida
                rolesPermitidos={[
                  "USUARIO",
                  "PROFESOR",
                  "ADMIN",
                ]}
              >
                <Examen />
              </RutaProtegida>
            }
          />

          {/* RESULTADOS */}
          <Route
            path="/resultado"
            element={
              <RutaProtegida
                rolesPermitidos={[
                  "PROFESOR",
                  "ADMIN",
                ]}
              >
                <Resultado />
              </RutaProtegida>
            }
          />

        </Routes>

      </main>

    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/registro"
          element={<Registro />}
        />

        <Route
          path="/*"
          element={<Layout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

export default App;