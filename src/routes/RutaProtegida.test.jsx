import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import RutaProtegida from "./RutaProtegida";

function PaginaPrivada() {

  return <h1>Dashboard Admin</h1>;
}

function Login() {

  return <h1>Login</h1>;
}

describe(
  "RutaProtegida",
  () => {

    beforeEach(() => {

      localStorage.clear();

    });

    test(
      "redirecciona al login si no hay sesion",
      () => {

        render(

          <MemoryRouter
            initialEntries={[
              "/dashboard",
            ]}
          >

            <Routes>

              <Route
                path="/"
                element={<Login />}
              />

              <Route
                path="/dashboard"
                element={

                  <RutaProtegida
                    rolesPermitidos={[
                      "ADMIN",
                    ]}
                  >

                    <PaginaPrivada />

                  </RutaProtegida>

                }
              />

            </Routes>

          </MemoryRouter>

        );

        expect(

          screen.getByText(
            "Login"
          )

        ).toBeInTheDocument();

      }
    );

    test(
      "permite acceso a ADMIN",
      () => {

        localStorage.setItem(
          "usuario",

          JSON.stringify({
            rol: "ADMIN",
          })
        );

        render(

          <MemoryRouter
            initialEntries={[
              "/dashboard",
            ]}
          >

            <Routes>

              <Route
                path="/dashboard"
                element={

                  <RutaProtegida
                    rolesPermitidos={[
                      "ADMIN",
                    ]}
                  >

                    <PaginaPrivada />

                  </RutaProtegida>

                }
              />

            </Routes>

          </MemoryRouter>

        );

        expect(

          screen.getByText(
            "Dashboard Admin"
          )

        ).toBeInTheDocument();

      }
    );

    test(
      "bloquea acceso a USUARIO",
      () => {

        localStorage.setItem(
          "usuario",

          JSON.stringify({
            rol: "USUARIO",
          })
        );

        render(

          <MemoryRouter
            initialEntries={[
              "/dashboard",
            ]}
          >

            <Routes>

              <Route
                path="/equipos"
                element={
                  <h1>Equipos</h1>
                }
              />

              <Route
                path="/dashboard"
                element={

                  <RutaProtegida
                    rolesPermitidos={[
                      "ADMIN",
                    ]}
                  >

                    <PaginaPrivada />

                  </RutaProtegida>

                }
              />

            </Routes>

          </MemoryRouter>

        );

        expect(

          screen.getByText(
            "Equipos"
          )

        ).toBeInTheDocument();

      }
    );

    test(
      "permite acceso a PROFESOR en resultados",
      () => {

        localStorage.setItem(
          "usuario",

          JSON.stringify({
            rol: "PROFESOR",
          })
        );

        render(

          <MemoryRouter
            initialEntries={[
              "/resultado",
            ]}
          >

            <Routes>

              <Route
                path="/resultado"
                element={

                  <RutaProtegida
                    rolesPermitidos={[
                      "PROFESOR",
                    ]}
                  >

                    <h1>
                      Resultados
                    </h1>

                  </RutaProtegida>

                }
              />

            </Routes>

          </MemoryRouter>

        );

        expect(

          screen.getByText(
            "Resultados"
          )

        ).toBeInTheDocument();

      }
    );

  }
);