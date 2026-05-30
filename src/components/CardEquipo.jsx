// src/components/CardEquipo.jsx

function CardEquipo({

  equipo,
  esAdmin,
  eliminarEquipo

}) {

  return (

    <div className="card-equipo">

      <img
        src={equipo.imagen}
        alt={equipo.nombre_equipo}
        className="imagen-equipo"
      />

      <div className="contenido">

        <h2>
          {equipo.nombre_equipo}
        </h2>

        <p>
          <strong>Marca:</strong>{" "}
          {equipo.marca}
        </p>

        <p>
          <strong>Modelo:</strong>{" "}
          {equipo.modelo}
        </p>

        <p>
          <strong>Tipo:</strong>{" "}
          {equipo.tipo_equipo}
        </p>

        {esAdmin && (

          <button
            className="btn-eliminar"
            onClick={() =>
              eliminarEquipo(
                equipo.id_equipo
              )
            }
          >
            Eliminar
          </button>

        )}

      </div>

    </div>
  );
}

export default CardEquipo;