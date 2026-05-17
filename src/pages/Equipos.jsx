import { useEffect, useState } from "react";

import "../styles/equipos.css";

import {
  obtenerEquipos
} from "../services/equipoService";

function Equipos() {

  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    cargarEquipos();
  }, []);

  async function cargarEquipos() {

    const data = await obtenerEquipos();

    const imagenes = [

      // IMAGEN 1
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",

      // IMAGEN 2
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200",

      // IMAGEN 3
      "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200",

      // IMAGEN 4
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200",

      // IMAGEN 5
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",

      // IMAGEN 6
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",

    ];

    const equiposConImagen = data.map(
      (equipo, index) => ({

        ...equipo,

        // ASIGNA UNA IMAGEN DIFERENTE
        imagen:
          imagenes[index % imagenes.length],

      })
    );

    setEquipos(equiposConImagen);
  }

  return (

    <div className="equipos-container">

      <h1 className="titulo">
        Equipos Biosmart
      </h1>

      <div className="equipos-grid">

        {equipos.map((equipo) => (

          <div
            key={equipo.id_equipo}
            className="card-equipo"
          >

            <img
              src={equipo.imagen}
              alt={equipo.nombre_equipo}
              className="imagen-equipo"
            />

            <div className="contenido">

              <h2>
                {equipo.nombre_equipo}
              </h2>

              <p>
                <strong>Marca:</strong>
                {" "}
                {equipo.marca}
              </p>

              <p>
                <strong>Modelo:</strong>
                {" "}
                {equipo.modelo}
              </p>

              <p>
                <strong>Tipo:</strong>
                {" "}
                {equipo.tipo_equipo}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Equipos;