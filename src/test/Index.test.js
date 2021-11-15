import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import App from "../App";

describe("Pruebas en <App />", () => {
  test("debe mostrar <App /> correctamente", () => {

    const wrapper = shallow(
      <App />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
