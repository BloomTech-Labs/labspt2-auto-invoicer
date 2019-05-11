import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../Dashboard/index";
import InvoicedCard from "../Dashboard/InvoicedCard";

it("shows an invoice card", () => {
  const wrapped = shallow(<Dashboard />);

  expect(wrapped.find(InvoicedCard).length).toEqual(0);
});
