import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import CriptoState from "../context/cripto/criptoState";
import CotizacionState from "../context/cotizacion/cotizacionState";

import Formulario from "../components/Formulario";

describe("Pruebas en <Formulario />", () => {
  test("debe mostrar <Formulario /> correctamente", () => {

    const wrapper = shallow(
      <CriptoState>
        <CotizacionState>
          <Formulario />
        </CotizacionState>
      </CriptoState>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
