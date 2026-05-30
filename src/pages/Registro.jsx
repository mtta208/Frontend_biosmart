import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/registro.css";


function Registro() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nombre: "",
        documento: "",
        correo: "",
        telefono: "",
        cargo: "",
        contrasena: "",
        rol: "USUARIO",
    });

    function cambiarValor(e) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    async function registrar(e) {

        e.preventDefault();

        await fetch(
            "http://localhost:8080/usuario",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            }
        );

        alert("Usuario registrado");

        navigate("/");
    }

    return (

        <div className="registro-container">

            <form
                onSubmit={registrar}
                className="registro-card"
            >

                <h2 className="registro-title">
                    Crear Cuenta
                </h2>

                <input
                    name="nombre"
                    placeholder="Nombre"
                    className="registro-input"
                    onChange={cambiarValor}
                />

                <input
                    name="documento"
                    placeholder="Documento"
                    className="registro-input"
                    onChange={cambiarValor}
                />

                <input
                    name="correo"
                    placeholder="Correo"
                    className="registro-input"
                    onChange={cambiarValor}
                />

                <input
                    name="telefono"
                    placeholder="Telefono"
                    className="registro-input"
                    onChange={cambiarValor}
                />

                <input
                    name="cargo"
                    placeholder="Cargo"
                    className="registro-input"
                    onChange={cambiarValor}
                />

                <input
                    type="password"
                    name="contrasena"
                    placeholder="Contraseña"
                    className="registro-input"
                    onChange={cambiarValor}
                />

                <button
                    type="submit"
                    className="registro-button"
                >
                    Registrarse
                </button>

                <p className="registro-text">

                    ¿Ya tienes cuenta?

                    <Link
                        to="/"
                        className="registro-link"
                    >
                        Iniciar sesión
                    </Link>

                </p>

            </form>

        </div>
    );
}

export default Registro;