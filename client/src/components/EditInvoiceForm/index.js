import React, { Component } from "react";
import axios from "axios";

import DayPickerInput from "react-day-picker/DayPickerInput";
import AddLogo from "../reusableComponents/AddLogo";
import SingleInput from "../reusableComponents/SingleInput";
import TextArea from "../reusableComponents/TextArea";
//import Select from "../reusableComponents/Select";
//import InvoiceItemInput from "../InvoiceItemsInput";

//Syling - CSS
import "./EditInvoiceForm.css";
import "react-day-picker/lib/style.css";

export default class EditInvoiceForm extends Component {
  constructor() {
    super();
    this.state = {
      invoice: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/graphql?query=query%20%7B%0A%20%20invoice(invoiceID%3A%20%225c9c3aa1242e1a4596fa996b%22)%7B%0A%20%20%20%20invoiceNumber%0A%20%20%20%20amountPaid%0A%20%20%20%20_id%0A%20%20%7D%0A%7D`
      )
      .then(response => {
        this.setState({ invoice: response.data.data.invoice });

        console.log(response.data.data.invoice);
        console.log(response.data.data.invoice.amountPaid);
      })
      .catch(err => {
        console.log("Failed to get Individual Invoice", err);
      });
  }

  render() {
    return (
      <div>
        EDIT Invoice Form.
        <div className="main-container">
          Main Container
          <section className="top-section">
            <div className="top-section-top">
              <div>*Thank you Message*</div>
              <div>
                <AddLogo />
              </div>
            </div>
            <div className="top-section-bottom">
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>Invoice No.</div>
                  <SingleInput
                    inputType="number"
                    // title={"Invoice Number"}
                    name="invoiceNumber"
                    controlFunc={this.handleInputChange}
                    content={this.state.invoiceNumber}
                    placeholder="# Invoice Number"
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Language</div>
                  {/* <Select
                    name="languageSelection"
                    placeholder="Choose Your Language of Choice"
                    controlFunc={this.handleInputChange}
                    options={this.state.languageOptions}
                    selectedOption={this.state.languageSelection}
                  /> */}
                </form>
              </div>
              <div>
                <form>
                  <div>Currency</div>
                  {/* <Select
                    name="currencySelection"
                    placeholder="Choose Your Currency"
                    controlFunc={this.handleInputChange}
                    options={this.state.currencyOptions}
                    selectedOption={this.state.currencySelection}
                  /> */}
                </form>
              </div>
            </div>
          </section>
          <section className="mid-section">
            <div className="mid-section-left">
              <div className="address-from">
                <form onSubmit={this.handleFormSubmit}>
                  <div>FROM</div>
                  <TextArea
                    inputType="text"
                    // title={"Invoice From"}
                    rows={5}
                    resize={false}
                    name="addressFrom"
                    controlFunc={this.handleInputChange}
                    placeholder={
                      "Your Business, Inc. \nYour Address \nCity, State/Region, \nYour Country"
                    }
                  />
                </form>
              </div>
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>TO</div>
                  <div>
                    <div>Street Address</div>
                    <SingleInput
                      inputType="text"
                      // title={"Invoice Number"}
                      name="addressTo"
                      controlFunc={this.handleInputChange}
                      content={this.state.addressTo}
                      placeholder="Client Street Address"
                    />
                  </div>
                  <div>
                    <div>City</div>
                    <SingleInput
                      inputType="text"
                      // title={"Invoice Number"}
                      name="cityTo"
                      controlFunc={this.handleInputChange}
                      content={this.state.cityTo}
                      placeholder="Client City"
                    />
                  </div>
                  <div>
                    <div>State or Region</div>
                    <SingleInput
                      inputType="text"
                      // title={"Invoice Number"}
                      name="stateRegionTo"
                      controlFunc={this.handleInputChange}
                      content={this.state.stateRegionTo}
                      placeholder="Client State or Region"
                    />
                  </div>
                  <div>
                    <div>Zip Code</div>
                    <SingleInput
                      inputType="number"
                      // title={"Invoice Number"}
                      name="zipCodeTo"
                      controlFunc={this.handleZipCodeToChange}
                      content={this.state.zipCodeTo}
                      placeholder="Client Zip Code"
                    />
                  </div>
                  <div>
                    <div>Client Email</div>
                    <SingleInput
                      inputType="text"
                      // title={"Invoice Number"}
                      name="clientEmailTo"
                      controlFunc={this.handleInputChange}
                      content={this.state.clientEmailTo}
                      placeholder="Client Email"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mid-section-right">
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>Date</div>

                  <div>
                    <DayPickerInput
                      name="selectedDate"
                      onDayChange={this.handleSelectedDateChange}
                      placeholder="Today's Date"
                    />
                  </div>
                </form>
              </div>
              <div>
                <form>
                  <div>Invoice Due</div>

                  <div>
                    <DayPickerInput
                      name="invoiceDueDate"
                      onDayChange={this.handleInvoiceDueDateChange}
                      placeholder="Invoice Due Date"
                    />
                  </div>
                </form>
              </div>
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>Balance Due</div>
                  <SingleInput
                    inputType="number"
                    // title={"Balance Due"}
                    name="balanceDue"
                    controlFunc={this.handleInputChange}
                    content={this.state.balanceDue}
                    placeholder="Balance Due"
                  />
                </form>
              </div>
            </div>
          </section>
          <section className="bottom-section">
            <div className="bottom-section-top">
              <form
                onSubmit={this.handleFormSubmit}
                onChange={this.handleInvoiceItemsInputChange}
              >
                {/* <InvoiceItemInput invoiceItems={this.state.invoiceItems} /> */}
                <button onClick={this.addInvoiceItem}>Add Line Item +</button>
              </form>
            </div>
            <div className="bottom-section-mid">
              <div className="bottom-section-bottom-left">
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Notes</div>
                    <TextArea
                      inputType="text"
                      // title={"Invoice Notes"}
                      rows={5}
                      resize={false}
                      name="invoiceNotes"
                      controlFunc={this.handleInputChange}
                      placeholder="Invoice Notes"
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Terms</div>
                    <TextArea
                      inputType="text"
                      // title={"Invoice Terms"}
                      rows={5}
                      resize={false}
                      name="invoiceTerms"
                      controlFunc={this.handleInputChange}
                      placeholder="Invoice Terms"
                    />
                  </form>
                </div>
              </div>
              <div className="bottom-section-bottom-right">
                <div>
                  <div>Subtotal</div>
                  <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                      inputType="number"
                      // title={"Subtotal"}
                      name="subtotal"
                      controlFunc={this.handleInputChange}
                      content={this.state.subtotal}
                      placeholder="Subtotal"
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Discount</div>
                    <SingleInput
                      inputType="number"
                      // title={"Discount"}
                      name="discount"
                      controlFunc={this.handleInputChange}
                      content={this.state.discount}
                      placeholder="Discount"
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Tax</div>
                    <div>
                      {Math.round(this.state.tax * 100).toFixed(2) || "0.00"} %
                    </div>
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Shipping</div>
                    <SingleInput
                      inputType="number"
                      // title={"Shipping"}
                      name="shipping"
                      controlFunc={this.handleInputChange}
                      content={this.state.shipping}
                      placeholder="Shipping"
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Total</div>
                    <SingleInput
                      inputType="number"
                      // title={"Total"}
                      name="total"
                      controlFunc={this.handleInputChange}
                      content={this.state.total}
                      placeholder="Total"
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Amount Paid</div>
                    <SingleInput
                      inputType="number"
                      // title={"Amount Paid"}
                      name="amountPaid"
                      controlFunc={this.handleInputChange}
                      content={this.state.amountPaid}
                      placeholder="Amount Paid"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="bottom-section-bottom">
              <div>Email: example@company.com </div>
              <br />
              <div>Phone: +1-555-555-5555</div>
            </div>
          </section>
          <button
            className="btn btn-link float-left"
            //onClick={this.handleFormSubmit}
          >
            UPDATE INVOICE
          </button>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    );
  }
}
