import React from "react";
import { render } from "react-testing-library";

import LandingPage from "../LandingPage";

describe("<LandingPage />", () => {
  it("renders Landing Page view", () => {
    render(<LandingPage />);
  });
});
