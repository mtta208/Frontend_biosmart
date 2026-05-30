// src/components/FormularioEquipo.jsx

import { useState } from "react";

function FormularioEquipo({

  agregarEquipo

}) {

  const [equipo, setEquipo] = useState({

    nombre_equipo: "",
    marca: "",
    modelo: "",
    tipo_equipo: "",

  });

  function cambiarValor(e) {

    setEquipo({

      ...equipo,
      [e.target.name]: e.target.value,

    });
  }

  function enviarFormulario(e) {

    e.preventDefault();

    agregarEquipo(equipo);

    setEquipo({

      nombre_equipo: "",
      marca: "",
      modelo: "",
      tipo_equipo: "",

    });
  }

  return (

    <form
      className="formulario-equipo"
      onSubmit={enviarFormulario}
    >

      <input
        type="text"
        name="nombre_equipo"
        placeholder="Nombre equipo"
        value={equipo.nombre_equipo}
        onChange={cambiarValor}
        required
      />

      <input
        type="text"
        name="marca"
        placeholder="Marca"
        value={equipo.marca}
        onChange={cambiarValor}
        required
      />

      <input
        type="text"
        name="modelo"
        placeholder="Modelo"
        value={equipo.modelo}
        onChange={cambiarValor}
        required
      />

      <input
        type="text"
        name="tipo_equipo"
        placeholder="Tipo equipo"
        value={equipo.tipo_equipo}
        onChange={cambiarValor}
        required
      />

      <button type="submit">
        Agregar Equipo
      </button>

    </form>
  );
}

export default FormularioEquipo;