const URL = "http://localhost:8080/resultadocapacitacion";

export async function obtenerResultados() {
  const response = await fetch(URL);
  return await response.json();
}