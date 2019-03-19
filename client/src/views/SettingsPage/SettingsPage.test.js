import React from "react";
import { render } from "react-testing-library";

import SettingsPage from "../SettingsPage";

describe("<SettingsPage />", () => {
  it("renders Settings Page view", () => {
    render(<SettingsPage />);
  });
});
