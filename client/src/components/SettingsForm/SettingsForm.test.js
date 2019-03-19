import React from "react";
import { render } from "react-testing-library";

import SettingsForm from "../SettingsForm";

describe("<SettingsForm />", () => {
  it("renders Settings Form", () => {
    render(<SettingsForm />);
  });
});
