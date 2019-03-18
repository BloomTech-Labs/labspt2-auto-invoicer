import React from "react";
import { render } from "react-testing-library";

import EmptyInvoices from "../EmptyInvoices";

describe("<EmptyInvoices />", () => {
  it("renders Empty Invoices", () => {
    render(<EmptyInvoices />);
  });
});
