import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import CriptoState from "../context/cripto/criptoState";
import CotizacionState from "../context/cotizacion/cotizacionState";

import Error from "../components/Error";

describe("Pruebas en <Error />", () => {
  test("debe mostrar <Error /> correctamente", () => {

    const wrapper = shallow(
      <CriptoState>
        <CotizacionState>
          <Error />
        </CotizacionState>
      </CriptoState>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
