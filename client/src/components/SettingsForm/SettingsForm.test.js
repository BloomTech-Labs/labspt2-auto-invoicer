import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import SettingsForm from "../SettingsForm";

describe("<SettingsForm />", () => {
  it("renders Settings Form", () => {
    const { asFragment } = render(<SettingsForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
