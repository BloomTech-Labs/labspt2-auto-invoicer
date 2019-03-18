import React from "react";
import { render } from "react-testing-library";

import SignInForm from "../SignInForm";

describe("<SignInForm />", () => {
  it("renders Sign In Form Component", () => {
    render(<SignInForm />);
  });
});
