import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import Spinner from "../components/Spinner";

describe("Pruebas en <Spinner />", () => {
  test("debe mostrar <Spinner /> correctamente", () => {

    const wrapper = shallow(
      <Spinner />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
