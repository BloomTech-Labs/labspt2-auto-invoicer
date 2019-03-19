import React from "react";
import { render } from "react-testing-library";

import BillingForm from "../BillingForm";

describe("<BillingForm />", () => {
  it("renders Billing Form", () => {
    render(<BillingForm />);
  });
});
