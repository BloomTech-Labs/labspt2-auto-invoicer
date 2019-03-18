import React from "react";
import { render } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import Invoices from "../Invoices";

describe("<Invoices />", () => {
  it("renders Invoices", () => {
    render(
      <Router>
        <Invoices />
      </Router>
    );
  });
});
