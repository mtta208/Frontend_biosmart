import { describe, test, expect, beforeEach } from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import App from "../App";

describe("Navbar Roles", () => {

  beforeEach(() => {

    localStorage.clear();

  });

  test(
    "ADMIN ve dashboard y usuarios",
    () => {

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          rol: "ADMIN",
        })
      );

      window.history.pushState(
        {},
        "",
        "/dashboard"
      );

      render(<App />);

    expect(
    screen.getAllByText("Dashboard")[0]
    ).toBeInTheDocument();

    expect(
    screen.getAllByText("Usuarios")[0]
    ).toBeInTheDocument();

    expect(
    screen.getAllByText("Equipos")[0]
    ).toBeInTheDocument();

    expect(
    screen.getAllByText("Capacitaciones")[0]
    ).toBeInTheDocument();
        }
  );

  test(
    "PROFESOR ve resultado",
    () => {

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          rol: "PROFESOR",
        })
      );

      window.history.pushState(
        {},
        "",
        "/resultado"
      );

      render(<App />);

      expect(
        screen.getByText("Equipos")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Capacitaciones")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Resultado")
      ).toBeInTheDocument();

    }
  );

  test(
    "USUARIO no ve dashboard ni usuarios",
    () => {

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          rol: "USUARIO",
        })
      );

      window.history.pushState(
        {},
        "",
        "/equipos"
      );

      render(<App />);

      expect(
        screen.queryByText("Dashboard")
      ).not.toBeInTheDocument();

      expect(
        screen.queryByText("Usuarios")
      ).not.toBeInTheDocument();

      expect(
        screen.getByText("Equipos")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Capacitaciones")
      ).toBeInTheDocument();

    }
  );

});