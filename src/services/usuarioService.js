const URL = "http://localhost:8080/usuario";

export async function obtenerUsuarios() {
  const response = await fetch(URL);
  return await response.json();
}

export async function guardarUsuario(usuario) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return await response.json();
}

export async function eliminarUsuario(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
}