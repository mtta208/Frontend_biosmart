// src/pages/Equipos.jsx

import { useEffect, useState } from "react";

import "../styles/equipos.css";

import {

  obtenerEquipos,
  guardarEquipo,
  eliminarEquipoPorId,

} from "../services/equipoService";

import FormularioEquipo from "../components/FormularioEquipo";
import ListaEquipos from "../components/ListaEquipos";

function Equipos() {

  const [equipos, setEquipos] = useState([]);

  const usuario =
    JSON.parse(
      localStorage.getItem("usuario")
    );

  const esAdmin =
    usuario?.rol === "ADMIN";

  useEffect(() => {

    cargarEquipos();

  }, []);

  async function cargarEquipos() {

    const data =
      await obtenerEquipos();

    const imagenes = [

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoHL15fQsnfYS97b4pkv6wTVCZp5uvwgvvw&s",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7lMLuR_bRqc0goCpk72ftaXmLRm2Ru82Yg&s",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzYFZs4kR8wuFnHsCIV9gURQL9ogvCF4ahA&s",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hiDP5B4pufCiK2KZ5mFJy1AdNahgwLc77w&s",

    ];

    const equiposConImagen =
      data.map(
        (equipo, index) => ({

          ...equipo,

          imagen:
            imagenes[
              index % imagenes.length
            ],

        })
      );

    setEquipos(equiposConImagen);
  }

  async function agregarEquipo(

    nuevoEquipo

  ) {

    await guardarEquipo(
      nuevoEquipo
    );

    cargarEquipos();
  }

  async function eliminarEquipo(id) {

    const confirmar =
      window.confirm(
        "¿Deseas eliminar este equipo?"
      );

    if (!confirmar) return;

    await eliminarEquipoPorId(id);

    cargarEquipos();
  }

  return (

    <div className="equipos-container">

      <h1 className="titulo">
        Equipos Biosmart
      </h1>

      {esAdmin && (

        <FormularioEquipo
          agregarEquipo={
            agregarEquipo
          }
        />

      )}

      <ListaEquipos
        equipos={equipos}
        esAdmin={esAdmin}
        eliminarEquipo={
          eliminarEquipo
        }
      />

    </div>
  );
}

export default Equipos;