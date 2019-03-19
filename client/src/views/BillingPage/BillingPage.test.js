import React from "react";
import { render } from "react-testing-library";

import BillingPage from "../BillingPage";

describe("<BillingPage />", () => {
  it("renders Billing Page view", () => {
    render(<BillingPage />);
  });
});
