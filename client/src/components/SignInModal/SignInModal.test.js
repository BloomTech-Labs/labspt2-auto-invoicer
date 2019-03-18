import React from "react";
import { render } from "react-testing-library";

import SignInModal from "../SignInModal";

describe("<SignInModal />", () => {
  it("renders Sign In Modal", () => {
    render(<SignInModal />);
  });
});
