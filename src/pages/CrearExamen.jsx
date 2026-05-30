import { useState } from "react";

import { useLocation } from "react-router-dom";

import {
  guardarExamen,
} from "../services/examenService";

import "../styles/examen.css";

function CrearExamen() {

  const location = useLocation();

  const capacitacion =
    location.state?.capacitacion;

  const [preguntas, setPreguntas] = useState([
    {
      pregunta: "",
      correcta: "",
      opcion1: "",
      opcion2: "",
      opcion3: "",
    },
  ]);

  function agregarPregunta() {

    if (preguntas.length >= 5) {
      alert("Máximo 5 preguntas");
      return;
    }

    setPreguntas([
      ...preguntas,
      {
        pregunta: "",
        correcta: "",
        opcion1: "",
        opcion2: "",
        opcion3: "",
      },
    ]);
  }

  function cambiarPregunta(
    index,
    campo,
    valor
  ) {

    const nuevas = [...preguntas];

    nuevas[index][campo] = valor;

    setPreguntas(nuevas);
  }

  async function guardar(e) {

    e.preventDefault();

    const examen = {
      id_capacitacion:
        capacitacion.id_capacitacion,
      preguntas,
    };

    await guardarExamen(examen);

    alert("Examen guardado");
  }

  return (

    <div className="contenedor-examen">

      <h1>
        Crear examen
      </h1>

      <h2>
        {capacitacion?.titulo}
      </h2>

      <form onSubmit={guardar}>

        {preguntas.map((pregunta, index) => (

          <div
            key={index}
            className="pregunta-card"
          >

            <input
              type="text"
              placeholder="Pregunta"
              value={pregunta.pregunta}
              onChange={(e) =>
                cambiarPregunta(
                  index,
                  "pregunta",
                  e.target.value
                )
              }
              required
            />

            <input
              type="text"
              placeholder="Respuesta correcta"
              value={pregunta.correcta}
              onChange={(e) =>
                cambiarPregunta(
                  index,
                  "correcta",
                  e.target.value
                )
              }
              required
            />

            <input
              type="text"
              placeholder="Opción incorrecta 1"
              value={pregunta.opcion1}
              onChange={(e) =>
                cambiarPregunta(
                  index,
                  "opcion1",
                  e.target.value
                )
              }
              required
            />

            <input
              type="text"
              placeholder="Opción incorrecta 2"
              value={pregunta.opcion2}
              onChange={(e) =>
                cambiarPregunta(
                  index,
                  "opcion2",
                  e.target.value
                )
              }
              required
            />

            <input
              type="text"
              placeholder="Opción incorrecta 3"
              value={pregunta.opcion3}
              onChange={(e) =>
                cambiarPregunta(
                  index,
                  "opcion3",
                  e.target.value
                )
              }
              required
            />

          </div>
        ))}

        <button
          type="button"
          onClick={agregarPregunta}
        >
          Agregar pregunta
        </button>

        <button type="submit">
          Guardar examen
        </button>

      </form>

    </div>
  );
}

export default CrearExamen;
