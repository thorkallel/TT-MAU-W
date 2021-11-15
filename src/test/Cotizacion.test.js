import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import CriptoState from "../context/cripto/criptoState";
import CotizacionState from "../context/cotizacion/cotizacionState";

import Cotizacion from "../components/Cotizacion";

describe("Pruebas en <Cotizacion />", () => {
  test("debe mostrar <Cotizacion /> correctamente", () => {

    const wrapper = shallow(
      <CriptoState>
        <CotizacionState>
          <Cotizacion />
        </CotizacionState>
      </CriptoState>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
