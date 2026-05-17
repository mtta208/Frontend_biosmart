import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/capacitaciones.css";

import { obtenerCapacitaciones } from "../services/capacitacionService";

function Capacitaciones() {

  const [capacitaciones, setCapacitaciones] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    cargarCapacitaciones();
  }, []);

  async function cargarCapacitaciones() {

    const data = await obtenerCapacitaciones();

    const imagenes = [

      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",

      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",

      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",

      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",

      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",

    ];

    const nuevas = data.map((capacitacion, index) => ({

      ...capacitacion,

      imagen: imagenes[index % imagenes.length]

    }));

    setCapacitaciones(nuevas);
  }

  function iniciarExamen(capacitacion) {

    navigate("/examen", {
      state: {
        capacitacion
      }
    });
  }

  return (

    <div className="contenedor-capacitaciones">

      <h1 className="titulo">
        Capacitaciones
      </h1>

      <div className="grid-capacitaciones">

        {capacitaciones.map((capacitacion) => (

          <div
            key={capacitacion.id_capacitacion}
            className="card-capacitacion"
          >

            <img
              src={capacitacion.imagen}
              alt={capacitacion.titulo}
              className="imagen-capacitacion"
            />

            <div className="contenido">

              <h2>
                {capacitacion.titulo}
              </h2>

              <p>
                {capacitacion.descripcion}
              </p>

              <button
                onClick={() =>
                  iniciarExamen(capacitacion)
                }
              >
                Iniciar examen
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Capacitaciones;