import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import BillingForm from "../BillingForm";

describe("<BillingForm />", () => {
  it("renders Billing Form", () => {
    const { asFragment } = render(<BillingForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
