import React from "react";
import { render } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import AuthLanding from "../AuthLanding";

describe("<AuthLanding />", () => {
  it("renders Auth Landing components", () => {
    render(
      <Router>
        <AuthLanding />
      </Router>
    );
  });
});
