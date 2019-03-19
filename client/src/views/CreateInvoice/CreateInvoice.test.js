import React from "react";
import { render } from "react-testing-library";

import CreateInvoice from "../CreateInvoice";

describe("<CreateInvoice />", () => {
  it("renders Create Invoice view", () => {
    render(<CreateInvoice />);
  });
});
