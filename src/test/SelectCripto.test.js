import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import CriptoState from "../context/cripto/criptoState";
import CotizacionState from "../context/cotizacion/cotizacionState";

import SelectCripto from "../hooks/useCriptomoneda";

describe("Pruebas en <SelectCripto />", () => {
  test("debe mostrar <SelectCripto /> correctamente", () => {

    const wrapper = shallow(
      <SelectCripto />
    );

    expect(wrapper).toMatchSnapshot();
  });

	test("debe mostrar los items <SelectCripto />", () => {

    const wrapper = shallow(
      <SelectCripto />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
