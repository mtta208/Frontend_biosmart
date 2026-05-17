const URL = "http://localhost:8080/capacitacion";

export async function obtenerCapacitaciones() {
  const response = await fetch(URL);
  return await response.json();
}