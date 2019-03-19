import React from "react";
import { render } from "react-testing-library";

import CreateInvoiceButton from "../CreateInvoiceButton";

describe("<CreateInvoiceButton />", () => {
  it("renders Create Invoice Button", () => {
    render(<CreateInvoiceButton />);
  });
});
