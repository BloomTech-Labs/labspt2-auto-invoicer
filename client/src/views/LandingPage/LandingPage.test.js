import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect"
import LandingPage from "../LandingPage";

describe("<LandingPage />", () => {
  it("renders Landing Page view", () => {
    render(<LandingPage />);
  });
  it("renders", () => {
    const { asFragment } = render(<LandingPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
