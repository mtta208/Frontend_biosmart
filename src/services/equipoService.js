// src/services/equipoService.js

const URL =
  "http://localhost:8080/equipo";

export async function obtenerEquipos() {

  const response =
    await fetch(URL);

  return await response.json();
}

export async function guardarEquipo(

  equipo

) {

  const response =
    await fetch(URL, {

      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        equipo
      ),

    });

  return await response.json();
}

export async function eliminarEquipoPorId(id) {

  const response =
    await fetch(`${URL}/${id}`, {

      method: "DELETE",

    });

  return await response.text();
}