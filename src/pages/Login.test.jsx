import { describe, test, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Login from "./Login";

describe("Login", () => {

  test(
    "renderiza el titulo BioSmart",
    () => {

      render(

        <BrowserRouter>
          <Login />
        </BrowserRouter>

      );

      expect(
        screen.getByText("BioSmart")
      ).toBeInTheDocument();

    }
  );

  test(
    "renderiza boton ingresar",
    () => {

      render(

        <BrowserRouter>
          <Login />
        </BrowserRouter>

      );

      expect(
        screen.getByText("Ingresar")
      ).toBeInTheDocument();

    }
  );

});