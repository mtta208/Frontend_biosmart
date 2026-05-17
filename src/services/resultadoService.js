const URL = "http://localhost:8080/resultado_capacitacion";

export async function obtenerResultados() {
  const response = await fetch(URL);
  return await response.json();
}