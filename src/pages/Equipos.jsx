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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoHL15fQsnfYS97b4pkv6wTVCZp5uvwgvvw&s",

      // IMAGEN 2
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7lMLuR_bRqc0goCpk72ftaXmLRm2Ru82Yg&s",

      // IMAGEN 3
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzYFZs4kR8wuFnHsCIV9gURQL9ogvCF4ahA&s",

      // IMAGEN 4
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hiDP5B4pufCiK2KZ5mFJy1AdNahgwLc77w&s",

      // IMAGEN 5
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoHL15fQsnfYS97b4pkv6wTVCZp5uvwgvvw&s",

      // IMAGEN 6
      "https://images.unsplash.com/photo-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8DVtowHz97TAkgWSp70yynDDx9EUQXLEEg&s1519389950473-47ba0277781c?q=80&w=1200",

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