import React, { PropTypes } from "react";
import { shallow, mount } from "enzyme";

import CompanyDetails from "../Settings/CompanyDetails/index";
import SelectCompany from "../Settings/CompanyDetails/SelectCompany";
import MenuItem from "@material-ui/core/MenuItem";
import { UserConsumer } from "../../contexts/UserContext";

test("enzyme dive", () => {
  const TestComponent = () => (
    <UserConsumer value="Provided Value">
      <SelectCompany />
    </UserConsumer>
  );
  const element = shallow(<TestComponent />);
  expect(
    element
      .find(SelectCompany)
      .dive()
      .text()
  ).toBe("<SelectCompany />");
});
