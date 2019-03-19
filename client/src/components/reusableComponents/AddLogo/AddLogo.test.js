import React from "react";
import { render } from "react-testing-library";

import AddLogo from "../AddLogo";

describe("<AddLogo />", () => {
  it("renders Add Logo", () => {
    render(<AddLogo />);
  });
});
