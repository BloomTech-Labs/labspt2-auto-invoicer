import React from "react";
import { render } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import AuthSecured from "../AuthSecured";

describe("<AuthSecured />", () => {
  it("renders Auth Secured components", () => {
    render(
      <Router>
        <AuthSecured />
      </Router>
    );
  });
});
