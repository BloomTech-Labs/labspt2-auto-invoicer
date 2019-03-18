import React from "react";
import { render } from "react-testing-library";

import CalendarDatePicker from "../CalendarDatePicker";

describe("<CalendarDatePicker />", () => {
  it("renders Calendar Date Picker", () => {
    render(<CalendarDatePicker />);
  });
});
