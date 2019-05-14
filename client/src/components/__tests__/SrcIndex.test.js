import React from "react";

import { shallow } from "enzyme";

import { GlobalState } from "../../context/GlobalState";

import App from "../App/index";

// NOTE: .toBe("<Route />") should be .toBe("<App />")

test("contains App in GlobalState context", () => {
  const TestComponent = () => (
    <GlobalState value="Provided Value">
      <App />
    </GlobalState>
  );
  const element = shallow(<TestComponent />);
  expect(
    element
      .find(App)
      .dive()
      .text()
  ).toBe("<Route />");
});
