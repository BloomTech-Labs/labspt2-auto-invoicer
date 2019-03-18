import React from "react";
import { render } from "react-testing-library";

import AddressForm from "../AddressForm";

describe("<AddressForm />", () => {
  it("renders Address Form", () => {
    render(<AddressForm />);
  });
});
