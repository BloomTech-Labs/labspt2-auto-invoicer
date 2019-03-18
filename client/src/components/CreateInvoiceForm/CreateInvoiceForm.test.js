import React from "react";
import { render } from "react-testing-library";

import CreateInvoiceForm from "../CreateInvoiceForm";

describe("<CreateInvoiceForm />", () => {
  it("renders Create Invoice Form", () => {
    render(<CreateInvoiceForm />);
  });
});
