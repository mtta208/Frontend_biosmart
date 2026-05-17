import { useEffect, useState } from "react";

import "../styles/resultado.css";

function Resultados() {

  const [resultados, setResultados] =
    useState([]);

  useEffect(() => {

    cargarResultados();

  }, []);

  async function cargarResultados() {

    try {

      const response = await fetch(
        "http://localhost:8080/resultado_capacitacion"
      );

      const data =
        await response.json();

      setResultados(data);

    } catch (error) {

      console.log(error);

      alert(
        "Error cargando resultados"
      );
    }
  }

  return (

    <div className="contenedor-resultados">

      <h1 className="titulo">
        Resultados de Exámenes
      </h1>

      <div className="tabla-container">

        <table className="tabla-resultados">

          <thead>

            <tr>

              <th>
                Usuario
              </th>

              <th>
                Capacitación
              </th>

              <th>
                Nota
              </th>

              <th>
                Estado
              </th>

              <th>
                Fecha
              </th>

            </tr>

          </thead>

          <tbody>

            {resultados.map((resultado) => (

              <tr
                key={
                  resultado.id_resultado
                }
              >

                <td>
                  {
                    resultado.usuario
                      ?.nombre
                  }
                </td>

                <td>
                  {
                    resultado.capacitacion
                      ?.titulo
                  }
                </td>

                <td>
                  {resultado.nota}/5
                </td>

                <td>

                  <span
                    className={
                      resultado.aprobado
                        ? "estado aprobado"
                        : "estado reprobado"
                    }
                  >

                    {resultado.aprobado
                      ? "APROBADO"
                      : "REPROBADO"}

                  </span>

                </td>

                <td>

                  {
                    resultado.fecha_presentacion
                  }

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Resultados;