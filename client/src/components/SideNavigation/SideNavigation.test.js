import React from "react";
import { render } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavigation from "../SideNavigation";

describe("<SideNavigation />", () => {
  it("renders Side Navigation component", () => {
    render(
      <Router>
        <SideNavigation />
      </Router>
    );
  });
});
