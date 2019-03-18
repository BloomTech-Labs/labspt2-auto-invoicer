import React from "react";
import { render } from "react-testing-library";

import Modal from "../Modal";

describe("<Modal />", () => {
  it("renders Modal", () => {
    render(<Modal />);
  });
});
