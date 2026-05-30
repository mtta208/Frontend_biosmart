// src/components/ListaEquipos.jsx

import CardEquipo from "./CardEquipo";

function ListaEquipos({

  equipos,
  esAdmin,
  eliminarEquipo

}) {

  return (

    <div className="equipos-grid">

      {equipos.map((equipo) => (

        <CardEquipo
          key={equipo.id_equipo}
          equipo={equipo}
          esAdmin={esAdmin}
          eliminarEquipo={eliminarEquipo}
        />

      ))}

    </div>
  );
}

export default ListaEquipos;