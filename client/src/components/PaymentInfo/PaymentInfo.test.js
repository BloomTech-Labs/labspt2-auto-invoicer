import React from "react";
import { render } from "react-testing-library";

import PaymentInfo from "../PaymentInfo";

describe("<PaymentInfo />", () => {
  it("renders Payment Info component", () => {
    render(
      <PaymentInfo paymentInfo={{ cc: "", exp: "", cvv: "", title: "" }} />
    );
  });
});
