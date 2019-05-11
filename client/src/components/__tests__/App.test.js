import React from "react";
import { shallow } from "enzyme";

import App from "../App/index";
import SignInModal from "../SignInModal/index";
import Navigation from "../Navigation/Navigation";
import LandingPage from "../../views/LandingPage";
import CreateInvoice from "../../views/CreateInvoice";
import InvoiceList from "../../views/InvoiceList";
import InvoiceView from "../../views/InvoiceView";
import EditInvoiceForm from "../EditInvoiceForm";

// Testing the App Component - show all components *within* the App component

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a sign-in modal", () => {
  expect(wrapped.find(SignInModal).length).toEqual(0);
});

it("contains a navigation component", () => {
  expect(wrapped.find(Navigation).length).toEqual(0);
});

//makes more sense to do: expect(wrapped.find(LandingPage));
it("contains LandingPage Views component", () => {
  expect(wrapped.find(LandingPage).length).toEqual(0);
});

it("contains CreateInvoice views component", () => {
  expect(wrapped.find(CreateInvoice));
});

it("contains InvoiceList views component", () => {
  expect(wrapped.find(InvoiceList));
});

it("contains InvoiceView views component", () => {
  expect(wrapped.find(InvoiceView));
});

it("contains EditInvoiceForm component", () => {
  expect(wrapped.find(EditInvoiceForm));
});
