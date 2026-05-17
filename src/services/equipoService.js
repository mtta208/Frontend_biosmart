const URL = "http://localhost:8080/equipo";

export async function obtenerEquipos() {
  const response = await fetch(URL);
  return await response.json();
}