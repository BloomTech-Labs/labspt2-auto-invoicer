import React, { Component } from "react";
import axios from "axios";
//import sub-components
import AddLogo from "../reusableComponents/AddLogo";
import SingleInput from "../reusableComponents/SingleInput";
import TextArea from "../reusableComponents/TextArea";
import Select from "../reusableComponents/Select";
import DayPickerInput from "react-day-picker/DayPickerInput";

// InvoiceItemInput
import InvoiceItemInput from "../InvoiceItemsInput";

//CSS
import "./CreateInvoiceForm.css";
import "react-day-picker/lib/style.css";

export default class index extends Component {
  //State from sub-components held here
  constructor() {
    super();
    this.state = {
      invoiceNumber: "",
      addressFrom: "",
      addressTo: "",
      cityTo: "",
      stateRegionTo: "",
      zipCodeTo: "",
      clientEmailTo: "",
      languageOptions: ["English (US)", "Español"],
      languageSelection: "",
      currencyOptions: [
        "US Dollar (USD)",
        "Euro (EUR)",
        "Sterling Pound (GBP)",
        "Chinese Renminbi (CNH)",
        "Japanese Yen (JPY)",
        "Thai Baht (THB)"
      ],
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
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInvoiceNumberChange = this.handleInvoiceNumberChange.bind(this);
    this.handleAddressFromChange = this.handleAddressFromChange.bind(this);
    this.handleAddressToChange = this.handleAddressToChange.bind(this);
    this.handleCityToChange = this.handleCityToChange.bind(this);
    this.handleStateRegionToChange = this.handleStateRegionToChange.bind(this);
    this.handleZipCodeToChange = this.handleZipCodeToChange.bind(this);
    this.handleClientEmailToChange = this.handleClientEmailToChange.bind(this);

    this.handleLanguageSelectionChange = this.handleLanguageSelectionChange.bind(
      this
    );
    this.handleCurrencySelectionChange = this.handleCurrencySelectionChange.bind(
      this
    );
    this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
    this.handleInvoiceDueDateChange = this.handleInvoiceDueDateChange.bind(
      this
    );
    this.handleBalanceDueChange = this.handleBalanceDueChange.bind(this);
    this.handleInvoiceNotesChange = this.handleInvoiceNotesChange.bind(this);
    this.handleInvoiceTermsChange = this.handleInvoiceTermsChange.bind(this);
    this.handleSubtotalChange = this.handleSubtotalChange.bind(this);
    this.handleDiscountChange = this.handleDiscountChange.bind(this);
    this.handleTaxChange = this.handleTaxChange.bind(this);
    this.handleShippingChange = this.handleShippingChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleAmountPaidChange = this.handleAmountPaidChange.bind(this);
    this.zipcodeApiAutofill = this.zipcodeApiAutofill.bind(this);
  }

  //create invoiceObject to send back to server

  // get tax rate object from api
  getTaxRateObject(zip) {
    if (zip) {
      axios
        .get(
          `https://2pkp3hqyc6.execute-api.us-east-1.amazonaws.com/dev/taxes/${zip}`
        )
        .then(res => {
          this.setState({ tax: res.data.rate.combined_rate });
        });
    }
  }
  //ZipcodeApi Function

  zipcodeApiAutofill() {
    if (this.state.zipCodeTo.length > 4) {
      //clientkey comes from zipcodeapi.com for client side key after registering for api key
      const clientKey =
        "js-kMEYzhr1QD1g3pfHW8oDHNZwbh9H0HlrQPFnSw4vIslCaICDQPTlmlodIzFax27L";
      const zipcode = this.state.zipCodeTo;
      const url =
        "https://www.zipcodeapi.com/rest/" +
        clientKey +
        "/info.json/" +
        zipcode +
        "/radians";
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
  }
  //individual invoice items
  handleInvoiceNumberChange(e) {
    this.setState({ invoiceNumber: e.target.value });
  }

  handleAddressFromChange(e) {
    this.setState({ addressFrom: e.target.value });
  }

  handleAddressToChange(e) {
    this.setState({ addressTo: e.target.value });
  }

  handleCityToChange(e) {
    this.setState({ cityTo: e.target.value });
  }

  handleStateRegionToChange(e) {
    this.setState({ stateRegionTo: e.target.value });
  }

  async handleZipCodeToChange(e) {
    await this.setState({ zipCodeTo: e.target.value });
    this.zipcodeApiAutofill();
  }

  handleClientEmailToChange(e) {
    this.setState({ clientEmailTo: e.target.value });
  }

  handleLanguageSelectionChange(e) {
    this.setState({ languageSelection: e.target.value });
  }

  handleCurrencySelectionChange(e) {
    this.setState({ currencySelection: e.target.value });
  }

  handleSelectedDateChange(day) {
    this.setState({ selectedDate: day });
  }

  handleInvoiceDueDateChange(day) {
    this.setState({ invoiceDueDate: day });
  }

  handleBalanceDueChange(e) {
    this.setState({ balanceDue: e.target.value });
  }

  handleInvoiceNotesChange(e) {
    this.setState({ invoiceNotes: e.target.value });
  }

  handleInvoiceTermsChange(e) {
    this.setState({ invoiceTerms: e.target.value });
  }

  handleSubtotalChange(e) {
    this.setState({ subtotal: e.target.value });
  }

  handleDiscountChange(e) {
    this.setState({ discount: e.target.value });
  }

  handleTaxChange(e) {
    this.setState({ tax: e.target.value });
  }

  handleShippingChange(e) {
    this.setState({ shipping: e.target.value });
  }

  handleTotalChange(e) {
    this.setState({ total: e.target.value });
  }

  handleAmountPaidChange(e) {
    this.setState({ amountPaid: e.target.value });
  }

  //invoiceItems
  handleInvoiceItemsInputChange = e => {
    if (["item", "quantity", "rate", "amount"].includes(e.target.className)) {
      let invoiceItems = [...this.state.invoiceItems];
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

  //submission - Clear Form
  handleClearForm(e) {
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
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      invoiceNumber: this.state.invoiceNumber,
      addressFrom: this.state.addressFrom,
      addressTo: this.state.addressTo,
      cityTo: this.state.cityTo,
      stateRegionTo: this.state.stateRegionTo,
      zipCodeTo: this.state.zipCodeTo,
      clientEmailTo: this.state.clientEmailTo,
      languageSelection: this.state.languageSelection,
      currencySelection: this.state.currencySelection,
      selectedDate: this.state.selectedDate,
      invoiceDueDate: this.state.invoiceDueDate,
      balanceDue: this.state.balanceDue,
      invoiceNotes: this.state.invoiceNotes,
      invoiceTerms: this.state.invoiceTerms,
      invoiceItems: this.state.invoiceItems,
      subtotal: this.state.subtotal,
      discount: this.state.discount,
      tax: this.state.tax,
      shipping: this.state.shipping,
      total: this.state.total,
      amountPaid: this.state.amountPaid
    };

    this.props.click(formPayload);
    this.handleClearForm(e);
  }

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
                    inputType={"text"}
                    //title={"Invoice Number"}
                    name={"name"}
                    controlFunc={this.handleInvoiceNumberChange}
                    content={this.state.invoiceNumber}
                    placeholder={"# Invoice Number"}
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Language</div>
                  <Select
                    name={"languageRange"}
                    placeholder={"Choose Your Language of Choice"}
                    controlFunc={this.handleLanguageSelectionChange}
                    options={this.state.languageOptions}
                    selectedOption={this.state.languageSelection}
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Currency</div>
                  <Select
                    name={"currencyRange"}
                    placeholder={"Choose Your Currency"}
                    controlFunc={this.handleCurrencySelectionChange}
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
                    inputType={"text"}
                    //title={"Invoice From"}
                    rows={5}
                    resize={false}
                    name={"name"}
                    controlFunc={this.handleAddressFromChange}
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
                      inputType={"text"}
                      //title={"Invoice Number"}
                      name={"name"}
                      controlFunc={this.handleAddressToChange}
                      content={this.state.addressTo}
                      placeholder={"Client Street Address"}
                    />
                  </div>
                  <div>
                    <div>City</div>
                    <SingleInput
                      inputType={"text"}
                      //title={"Invoice Number"}
                      name={"name"}
                      controlFunc={this.handleCityToChange}
                      content={this.state.cityTo}
                      placeholder={"Client City"}
                    />
                  </div>
                  <div>
                    <div>State / Region</div>
                    <SingleInput
                      inputType={"text"}
                      //title={"Invoice Number"}
                      name={"name"}
                      controlFunc={this.handleStateRegionToChange}
                      content={this.state.stateRegionTo}
                      placeholder={"Client State / Region"}
                    />
                  </div>
                  <div>
                    <div>Zip Code</div>
                    <SingleInput
                      inputType={"text"}
                      //title={"Invoice Number"}
                      name={"name"}
                      controlFunc={this.handleZipCodeToChange}
                      content={this.state.zipCodeTo}
                      placeholder={"Client Zip Codes"}
                    />
                  </div>
                  <div>
                    <div>Client Email</div>
                    <SingleInput
                      inputType={"text"}
                      //title={"Invoice Number"}
                      name={"name"}
                      controlFunc={this.handleClientEmailToChange}
                      content={this.state.clientEmailTo}
                      placeholder={"Client Email"}
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
                    inputType={"text"}
                    //title={"Balance Due"}
                    name={"name"}
                    controlFunc={this.handleBalanceDueChange}
                    content={this.state.balanceDue}
                    placeholder={"Balance Due"}
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
                      inputType={"text"}
                      //title={"Invoice Notes"}
                      rows={5}
                      resize={false}
                      name={"name"}
                      controlFunc={this.handleInvoiceNotesChange}
                      placeholder={"Invoice Notes"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Terms</div>
                    <TextArea
                      inputType={"text"}
                      //title={"Invoice Terms"}
                      rows={5}
                      resize={false}
                      name={"name"}
                      controlFunc={this.handleInvoiceTermsChange}
                      placeholder={"Invoice Terms"}
                    />
                  </form>
                </div>
              </div>
              <div className="bottom-section-bottom-right">
                <div>
                  <div>Subtotal</div>
                  <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                      inputType={"text"}
                      //title={"Subtotal"}
                      name={"name"}
                      controlFunc={this.handleSubtotalChange}
                      content={this.state.subtotal}
                      placeholder={"Subtotal"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Discount</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Discount"}
                      name={"name"}
                      controlFunc={this.handleDiscountChange}
                      content={this.state.discount}
                      placeholder={"Discount"}
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
                      inputType={"integer"}
                      //title={"Shipping"}
                      name={"name"}
                      controlFunc={this.handleShippingChange}
                      content={this.state.shipping}
                      placeholder={"Shipping"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Total</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Total"}
                      name={"name"}
                      controlFunc={this.handleTotalChange}
                      content={this.state.total}
                      placeholder={"Total"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Amount Paid</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Amount Paid"}
                      name={"name"}
                      controlFunc={this.handleAmountPaidChange}
                      content={this.state.amountPaid}
                      placeholder={"Amount Paid"}
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
