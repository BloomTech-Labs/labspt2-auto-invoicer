import React from "react";
import { render } from "react-testing-library";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";

describe("App Component", () => {
  it("renders App", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
