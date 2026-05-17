import { useEffect, useState } from "react";

import {
  obtenerUsuarios,
  guardarUsuario,
  eliminarUsuario,
} from "../services/usuarioService";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    cargarUsuarios();
  }, []);

  async function cargarUsuarios() {
    const data = await obtenerUsuarios();
    setUsuarios(data);
  }

  async function crearUsuario(e) {
    e.preventDefault();

    const nuevoUsuario = {
      nombre,
      correo,
    };

    await guardarUsuario(nuevoUsuario);

    setNombre("");
    setCorreo("");

    cargarUsuarios();
  }

  async function borrarUsuario(id) {
    await eliminarUsuario(id);
    cargarUsuarios();
  }

  return (
    <div>
      <h1>Usuarios</h1>

      <form
        onSubmit={crearUsuario}
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Nombre</th>
            <th style={th}>Correo</th>
            <th style={th}>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td style={td}>{usuario.id_usuario}</td>
              <td style={td}>{usuario.nombre}</td>
              <td style={td}>{usuario.correo}</td>

              <td style={td}>
                <button
                  onClick={() => borrarUsuario(usuario.id_usuario)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  border: "1px solid #cbd5e1",
  padding: "12px",
  background: "#e2e8f0",
};

const td = {
  border: "1px solid #cbd5e1",
  padding: "12px",
};

export default Usuarios;