import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import PaymentInfo from "../PaymentInfo";

describe("<PaymentInfo />", () => {
  it("renders Payment Info component", () => {
    const { asFragment } = render(
      <PaymentInfo paymentInfo={{ cc: "", exp: "", cvv: "", title: "" }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
