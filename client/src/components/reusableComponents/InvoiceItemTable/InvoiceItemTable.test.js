import React from "react";
import { render } from "react-testing-library";

import InvoiceItemTable from "../InvoiceItemTable";

describe("<InvoiceItemTable />", () => {
  it("renders Invoice Item Table", () => {
    render(<InvoiceItemTable />);
  });
});
