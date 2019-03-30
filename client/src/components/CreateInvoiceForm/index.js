import React, { Component } from "react";
import axios from "axios";

import DayPickerInput from "react-day-picker/DayPickerInput";
import AddLogo from "../reusableComponents/AddLogo";
import SingleInput from "../reusableComponents/SingleInput";
import TextArea from "../reusableComponents/TextArea";
import Select from "../reusableComponents/Select";
import InvoiceItemInput from "../InvoiceItemsInput";

import "./CreateInvoiceForm.css";
import "react-day-picker/lib/style.css";

export default class CreateInvoiceForm extends Component {
  state = {
    languageOptions: ["English (US)", "Español"],
    currencyOptions: [
      "US Dollar (USD)",
      "Euro (EUR)",
      "Sterling Pound (GBP)",
      "Chinese Renminbi (CNH)",
      "Japanese Yen (JPY)",
      "Thai Baht (THB)"
    ],
    invoiceNumber: "",
    addressFrom: "",
    addressTo: "",
    cityTo: "",
    stateRegionTo: "",
    zipCodeTo: "",
    clientEmailTo: "",
    languageSelection: "",
    currencySelection: "",
    selectedDate: "",
    invoiceDueDate: "",
    balanceDue: "",
    invoiceItems: [{ item: "", quantity: "", rate: "", amount: "" }],
    subtotal: "",
    discount: "",
    tax: "",
    shipping: "",
    total: "",
    invoiceNotes: "",
    invoiceTerms: "",
    amountPaid: ""
  };

  // get tax rate object from api
  getTaxRateObject = zip => {
    if (zip) {
      axios.get(`https://api.myautoinvoicer.com/taxes/${zip}`).then(res => {
        this.setState({ tax: res.data.rate.combined_rate });
      });
    }
  };

  // ZipcodeApi Function
  zipcodeApiAutofill = () => {
    if (this.state.zipCodeTo.length > 4) {
      // clientkey comes from zipcodeapi.com for client side key after registering for api key
      const clientKey =
        "js-kMEYzhr1QD1g3pfHW8oDHNZwbh9H0HlrQPFnSw4vIslCaICDQPTlmlodIzFax27L";
      const zipcode = this.state.zipCodeTo;
      const url = `https://www.zipcodeapi.com/rest/${clientKey}/info.json/${zipcode}/radians`;
      axios
        .get(url)
        .then(res => {
          this.setState({
            cityTo: res.data.city,
            stateRegionTo: res.data.state
          });

          return this.getTaxRateObject(zipcode);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    } else {
      this.setState({ cityTo: "", stateRegionTo: "", tax: "" });
    }
  };
  // individual invoice items

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleZipCodeToChange = async e => {
    await this.setState({ zipCodeTo: e.target.value });
    this.zipcodeApiAutofill();
  };

  handleCalendarChange = (e, day) => {
    this.setState({ [e.target.name]: day });
  };

  handleSelectedDateChange = day => {
    this.setState({ selectedDate: day });
  };

  handleInvoiceDueDateChange = day => {
    this.setState({ invoiceDueDate: day });
  };

  // invoiceItems
  handleInvoiceItemsInputChange = e => {
    if (["item", "quantity", "rate", "amount"].includes(e.target.className)) {
      const invoiceItems = [...this.state.invoiceItems];
      invoiceItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceItems }, () => console.log("Invoice Items"));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addInvoiceItem = e => {
    e.preventDefault();
    this.setState(prevState => ({
      invoiceItems: [
        ...prevState.invoiceItems,
        { item: "", quantity: "", rate: "", amount: "" }
      ]
    }));
  };

  // submission - Clear Form
  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      invoiceNumber: "",
      addressFrom: " ",
      addressTo: " ",
      cityTo: "",
      stateRegionTo: "",
      zipCodeTo: "",
      clientEmailTo: "",
      languageSelection: "",
      currencySelection: "",
      selectedDate: undefined,
      invoiceDueDate: undefined,
      balanceDue: "",
      invoiceNotes: "",
      invoiceTerms: "",
      invoiceItems: [{ item: "", quantity: "", rate: "", amount: "" }],
      subtotal: "",
      discount: "",
      tax: "",
      shipping: "",
      total: "",
      amountPaid: ""
    });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const createInvoiceQuery = {
      query: `
        mutation {
          createInvoice(invoiceInput: {
            invoiceNumber: ${this.state.invoiceNumber},
            addressFrom: "${this.state.addressFrom}",
            addressTo: "${this.state.addressTo}",
            cityTo: "${this.state.cityTo}",
            stateRegionTo: "${this.state.stateRegionTo}",
            zipCodeTo: ${this.state.zipCodeTo},
            clientEmailTo: "${this.state.clientEmailTo}",
            languageSelection: "${this.state.languageSelection}",
            currencySelection: "${this.state.currencySelection}",
            selectedDate: "${this.state.selectedDate}",
            invoiceDueDate: "${this.state.invoiceDueDate}",
            balanceDue: ${this.state.balanceDue},
            subtotal: ${this.state.subtotal},
            discount: ${this.state.discount},
            tax: ${this.state.tax},
            shipping: ${this.state.shipping},
            total: ${this.state.total},
            invoiceNotes: "${this.state.invoiceNotes}",
            invoiceTerms: "${this.state.invoiceTerms}",
            amountPaid: ${this.state.amountPaid}
          }) {
            _id
          }
        }
      `
    };
    const newInvoice = await axios.post(
      "https://api.myautoinvoicer.com/graphql",
      createInvoiceQuery
    );

    return newInvoice.data.data;
  };

  render() {
    return (
      <div>
        Create Invoice Form.
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
                  <Select
                    name="languageSelection"
                    placeholder="Choose Your Language of Choice"
                    controlFunc={this.handleInputChange}
                    options={this.state.languageOptions}
                    selectedOption={this.state.languageSelection}
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Currency</div>
                  <Select
                    name="currencySelection"
                    placeholder="Choose Your Currency"
                    controlFunc={this.handleInputChange}
                    options={this.state.currencyOptions}
                    selectedOption={this.state.currencySelection}
                  />
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
                <InvoiceItemInput invoiceItems={this.state.invoiceItems} />
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
            onClick={this.handleFormSubmit}
          >
            Generate
          </button>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    );
  }
}
