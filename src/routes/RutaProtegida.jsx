import { Navigate } from "react-router-dom";

function RutaProtegida({
  children,
  rolesPermitidos,
}) {

  const usuarioGuardado =
    localStorage.getItem("usuario");

  // SI NO HAY SESION
  if (!usuarioGuardado) {
    return <Navigate to="/" />;
  }

  const usuario =
    JSON.parse(usuarioGuardado);

  // VALIDAR ROL
  if (
    !rolesPermitidos.includes(
      usuario.rol
    )
  ) {

    // REDIRECCIONES SEGUN ROL
    if (usuario.rol === "USUARIO") {
      return (
        <Navigate to="/equipos" />
      );
    }

    if (usuario.rol === "PROFESOR") {
      return (
        <Navigate to="/resultado" />
      );
    }

    if (usuario.rol === "ADMIN") {
      return (
        <Navigate to="/dashboard" />
      );
    }

    return <Navigate to="/" />;
  }

  return children;
}

export default RutaProtegida;