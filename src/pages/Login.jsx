import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    async function iniciarSesion(e) {

  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:8080/usuario/login",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          correo,
          contrasena,
        }),

      }
    );

    const texto =
      await response.text();

    // SI NO VIENE NADA
    if (!texto) {

      alert(
        "Correo o contraseña incorrectos"
      );

      return;
    }

    const usuario =
      JSON.parse(texto);

    // VALIDAR USUARIO
    if (!usuario.id_usuario) {

      alert(
        "Error iniciando sesión"
      );

      return;
    }

    // GUARDAR USUARIO
    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );

    alert("Bienvenido");

// REDIRECCION POR ROL
if (usuario.rol === "ADMIN") {

  navigate("/dashboard");

} else if (
  usuario.rol === "PROFESOR"
) {

  navigate("/resultado");

} else {

  navigate("/equipos");
}

  } catch (error) {

    console.log(error);

    alert(
      "Error conectando con el servidor"
    );
  }
}

    return (

        <div className="login-container">

            <form
                onSubmit={iniciarSesion}
                className="login-card"
            >

                <h2 className="login-title">
                    BioSmart
                </h2>

                <input
                    type="email"
                    placeholder="Correo"
                    className="login-input"
                    value={correo}
                    onChange={(e) =>
                        setCorreo(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Contrasena"
                    className="login-input"
                    value={contrasena}
                    onChange={(e) =>
                        setContrasena(e.target.value)
                    }
                />

                <button
                    type="submit"
                    className="login-button"
                >
                    Ingresar
                </button>

                <p className="login-text">

                    ¿No tienes cuenta?

                    <Link
                        to="/registro"
                        className="login-link"
                    >
                        Registrarse
                    </Link>

                </p>

            </form>

        </div>
    );
}

export default Login;