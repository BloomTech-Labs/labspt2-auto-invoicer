import React from "react";
import { render } from "react-testing-library";

import LandingText from "../LandingText";

describe("<LandingText />", () => {
  it("renders Landing Text", () => {
    render(<LandingText />);
  });
});
