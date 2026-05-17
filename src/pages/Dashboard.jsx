import { useEffect, useState } from "react";

import Card from "../components/Card";

import { obtenerUsuarios } from "../services/usuarioService";
import { obtenerEquipos } from "../services/equipoService";
import { obtenerCapacitaciones } from "../services/capacitacionService";
import { obtenerResultados } from "../services/resultadoService";

function Dashboard() {
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalEquipos, setTotalEquipos] = useState(0);
  const [totalCapacitaciones, setTotalCapacitaciones] = useState(0);
  const [totalResultados, setTotalResultados] = useState(0);

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    const usuarios = await obtenerUsuarios();
    const equipos = await obtenerEquipos();
    const capacitaciones = await obtenerCapacitaciones();
    const resultados = await obtenerResultados();

    setTotalUsuarios(usuarios.length);
    setTotalEquipos(equipos.length);
    setTotalCapacitaciones(capacitaciones.length);
    setTotalResultados(resultados.length);
  }

  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
          color: "#0f172a",
        }}
      >
        Dashboard Biosmart
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Card titulo="Usuarios" valor={totalUsuarios} />

        <Card titulo="Equipos" valor={totalEquipos} />

        <Card
          titulo="Capacitaciones"
          valor={totalCapacitaciones}
        />

        <Card
          titulo="Resultados"
          valor={totalResultados}
        />
      </div>
    </div>
  );
}

export default Dashboard;