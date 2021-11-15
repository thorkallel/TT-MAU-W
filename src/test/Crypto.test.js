import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import CriptoState from "../context/cripto/criptoState";
import CotizacionState from "../context/cotizacion/cotizacionState";

import Crypto from "../components/Crypto";

describe("Pruebas en <Crypto />", () => {
  test("debe mostrar <Crypto /> correctamente", () => {

    const wrapper = shallow(
      <CriptoState>
        <CotizacionState>
          <Crypto />
        </CotizacionState>
      </CriptoState>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
