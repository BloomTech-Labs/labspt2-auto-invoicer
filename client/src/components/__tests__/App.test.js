import React from "react";
import { shallow } from "enzyme";

import App from "../App/index";
import SignInModal from "../SignInModal";
import Navigation from "../Navigation/Navigation";
import LandingPage from "../../views/LandingPage";
import CreateInvoice from "../../views/CreateInvoice";
import InvoiceList from "../../views/InvoiceList";
import InvoiceView from "../../views/InvoiceView";
import EditInvoiceForm from "../EditInvoiceForm";

it("shows a sign-in modal", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(SignInModal).length).toEqual(0);
});

it("contains a navigation component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Navigation).length).toEqual(0);
});

//makes more sense to do: expect(wrapped.find(LandingPage));
it("contains LandingPage Views component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(LandingPage).length).toEqual(0);
});

it("contains CreateInvoice views component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CreateInvoice));
});

it("contains InvoiceList views component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(InvoiceList));
});

it("contains InvoiceView views component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(InvoiceView));
});

it("contains EditInvoiceForm component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(EditInvoiceForm));
});
