import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import InvoiceCard from "../InvoiceCard";

describe("<InvoiceCard />", () => {
  it("renders Invoice Card", () => {
    const { asFragment } = render(
      <InvoiceCard
        invoice={{
          invoiceNumber: 0,
          text: "testing invoice card",
          paidStatus: "paid"
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
