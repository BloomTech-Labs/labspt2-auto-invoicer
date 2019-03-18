import React from "react";
import { render } from "react-testing-library";

import PasswordResetView from "../PasswordResetView";

describe("<PasswordResetView />", () => {
  it("renders Password Reset view", () => {
    render(<PasswordResetView />);
  });
});
