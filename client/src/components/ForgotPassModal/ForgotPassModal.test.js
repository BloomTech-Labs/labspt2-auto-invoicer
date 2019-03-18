import React from "react";
import { render } from "react-testing-library";

import ForgotPassModal from "../ForgotPassModal";

describe("<ForgotPassModal />", () => {
  it("renders Forgot Password Modal", () => {
    render(<ForgotPassModal />);
  });
});
