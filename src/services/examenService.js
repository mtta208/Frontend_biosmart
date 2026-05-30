const API = "http://localhost:8080/examenes";

export async function guardarExamen(examen) {

  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(examen),
  });

  return response.json();
}


