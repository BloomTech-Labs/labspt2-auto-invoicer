import React from "react";
import { render } from "react-testing-library";

import InvoiceCard from "../InvoiceCard";

describe("<InvoiceCard />", () => {
  it("renders Invoice Card", () => {
    render(
      <InvoiceCard
        invoice={{
          invoiceNumber: 0,
          text: "testing invoice card",
          paidStatus: "paid"
        }}
      />
    );
  });
});
