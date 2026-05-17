import { useEffect, useState } from "react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import "../styles/examen.css";

function Examen() {

  const location = useLocation();

  const navigate = useNavigate();

  const usuario =
    JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {

    if (!usuario) {

      alert("Debes iniciar sesión");

      navigate("/");
    }

  }, []);

  const capacitacion =
    location.state?.capacitacion;

  const [tiempo, setTiempo] =
    useState(1800);

  const [respuestas, setRespuestas] =
    useState({

      respuesta1: "",
      respuesta2: "",
      respuesta3: "",
      respuesta4: "",
      respuesta5: "",

    });

  // RESPUESTAS CORRECTAS
  const respuestasCorrectas = {

    respuesta1: "A",
    respuesta2: "B",
    respuesta3: "C",
    respuesta4: "D",
    respuesta5: "A",

  };

  useEffect(() => {

    const intervalo = setInterval(() => {

      setTiempo((prev) => {

        if (prev <= 1) {

          finalizarExamen();

          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  function cambiarRespuesta(e) {

    setRespuestas({

      ...respuestas,

      [e.target.name]:
        e.target.value

    });
  }

  async function finalizarExamen() {

    let correctas = 0;

    if (
      respuestas.respuesta1 ===
      respuestasCorrectas.respuesta1
    ) {
      correctas++;
    }

    if (
      respuestas.respuesta2 ===
      respuestasCorrectas.respuesta2
    ) {
      correctas++;
    }

    if (
      respuestas.respuesta3 ===
      respuestasCorrectas.respuesta3
    ) {
      correctas++;
    }

    if (
      respuestas.respuesta4 ===
      respuestasCorrectas.respuesta4
    ) {
      correctas++;
    }

    if (
      respuestas.respuesta5 ===
      respuestasCorrectas.respuesta5
    ) {
      correctas++;
    }

    const aprobado =
      correctas >= 3;

    const nota =
      correctas;

    const resultado = {

      nota: nota,

      aprobado: aprobado,

      fecha_presentacion:
        new Date(),

      usuario: {
        id_usuario:
          usuario.id_usuario,
      },

      capacitacion: {
        id_capacitacion:
          capacitacion.id_capacitacion,
      },

    };

    try {

      await fetch(
        "http://localhost:8080/resultado_capacitacion",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(resultado),

        }
      );

      alert(
        aprobado
          ? `Examen aprobado con ${nota}/5`
          : `Examen reprobado con ${nota}/5`
      );

      // RETORNA AL DASHBOARD
      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        "Error guardando resultado"
      );
    }
  }

  const minutos =
    Math.floor(tiempo / 60);

  const segundos =
    tiempo % 60;

  return (

    <div className="contenedor-examen">

      <div className="header">

        <h1>
          Examen
        </h1>

        <div className="timer">

          {minutos}:
          {segundos < 10
            ? `0${segundos}`
            : segundos}

        </div>

      </div>

      {/* PREGUNTA 1 */}
      <div className="pregunta">

        <h3>
          1. ¿Qué significa BIOSMART?
        </h3>

        <label>
          <input
            type="radio"
            name="respuesta1"
            value="A"
            onChange={cambiarRespuesta}
          />
          A. Sistema inteligente
        </label>

        <label>
          <input
            type="radio"
            name="respuesta1"
            value="B"
            onChange={cambiarRespuesta}
          />
          B. Computador
        </label>

        <label>
          <input
            type="radio"
            name="respuesta1"
            value="C"
            onChange={cambiarRespuesta}
          />
          C. Red social
        </label>

        <label>
          <input
            type="radio"
            name="respuesta1"
            value="D"
            onChange={cambiarRespuesta}
          />
          D. Base de datos
        </label>

      </div>

      {/* PREGUNTA 2 */}
      <div className="pregunta">

        <h3>
          2. ¿Cuál opción es correcta?
        </h3>

        <label>
          <input
            type="radio"
            name="respuesta2"
            value="A"
            onChange={cambiarRespuesta}
          />
          A. HTML
        </label>

        <label>
          <input
            type="radio"
            name="respuesta2"
            value="B"
            onChange={cambiarRespuesta}
          />
          B. React
        </label>

        <label>
          <input
            type="radio"
            name="respuesta2"
            value="C"
            onChange={cambiarRespuesta}
          />
          C. Paint
        </label>

        <label>
          <input
            type="radio"
            name="respuesta2"
            value="D"
            onChange={cambiarRespuesta}
          />
          D. Word
        </label>

      </div>

      {/* PREGUNTA 3 */}
      <div className="pregunta">

        <h3>
          3. ¿Qué usa Spring Boot?
        </h3>

        <label>
          <input
            type="radio"
            name="respuesta3"
            value="A"
            onChange={cambiarRespuesta}
          />
          A. Python
        </label>

        <label>
          <input
            type="radio"
            name="respuesta3"
            value="B"
            onChange={cambiarRespuesta}
          />
          B. PHP
        </label>

        <label>
          <input
            type="radio"
            name="respuesta3"
            value="C"
            onChange={cambiarRespuesta}
          />
          C. Java
        </label>

        <label>
          <input
            type="radio"
            name="respuesta3"
            value="D"
            onChange={cambiarRespuesta}
          />
          D. C#
        </label>

      </div>

      {/* PREGUNTA 4 */}
      <div className="pregunta">

        <h3>
          4. ¿Cuál es una base de datos?
        </h3>

        <label>
          <input
            type="radio"
            name="respuesta4"
            value="A"
            onChange={cambiarRespuesta}
          />
          A. Chrome
        </label>

        <label>
          <input
            type="radio"
            name="respuesta4"
            value="B"
            onChange={cambiarRespuesta}
          />
          B. React
        </label>

        <label>
          <input
            type="radio"
            name="respuesta4"
            value="C"
            onChange={cambiarRespuesta}
          />
          C. Java
        </label>

        <label>
          <input
            type="radio"
            name="respuesta4"
            value="D"
            onChange={cambiarRespuesta}
          />
          D. MySQL
        </label>

      </div>

      {/* PREGUNTA 5 */}
      <div className="pregunta">

        <h3>
          5. ¿Qué framework usamos?
        </h3>

        <label>
          <input
            type="radio"
            name="respuesta5"
            value="A"
            onChange={cambiarRespuesta}
          />
          A. React
        </label>

        <label>
          <input
            type="radio"
            name="respuesta5"
            value="B"
            onChange={cambiarRespuesta}
          />
          B. Excel
        </label>

        <label>
          <input
            type="radio"
            name="respuesta5"
            value="C"
            onChange={cambiarRespuesta}
          />
          C. Word
        </label>

        <label>
          <input
            type="radio"
            name="respuesta5"
            value="D"
            onChange={cambiarRespuesta}
          />
          D. PowerPoint
        </label>

      </div>

      <button
        className="btn-finalizar"
        onClick={finalizarExamen}
      >
        Finalizar examen
      </button>

    </div>
  );
}

export default Examen;