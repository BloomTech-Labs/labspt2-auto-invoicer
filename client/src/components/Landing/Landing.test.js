import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Landing from "../Landing";

describe("<Landing />", () => {
  it("renders Landing component", () => {
    render(<Landing />);
  });
  it("renders", () => {
    const { asFragment } = render(<Landing />);
    expect(asFragment()).toMatchSnapshot();
  });
});
