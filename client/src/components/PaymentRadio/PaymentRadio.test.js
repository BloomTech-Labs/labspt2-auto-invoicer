import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import PaymentRadio from "../PaymentRadio";

describe("<PaymentRadio />", () => {
  it("renders PaymentRadio component", () => {
    const { asFragment } = render(<PaymentRadio />);
    expect(asFragment()).toMatchSnapshot();
  });
});
