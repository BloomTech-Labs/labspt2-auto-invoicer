import React from "react";
import { render } from "react-testing-library";

import Select from "../Select";

describe("<Select />", () => {
  it("renders Select", () => {
    render(<Select options={["test", "testing", "more testing"]} />);
  });
});
