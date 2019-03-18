import React from "react";
import { render } from "react-testing-library";

import PaymentRadio from "../PaymentRadio";

describe("<PaymentRadio />", () => {
  it("renders PaymentRadio component", () => {
    render(<PaymentRadio />);
  });
});
