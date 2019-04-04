import React from "react";
import "./CompanyForm.css";

import { CreateCompany } from "../../graphQL/mutations/companies";

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.state = {
      companyName: "",
      companyAddress: "",
      companyZip: "",
      companyState: "",
      companyCity: "",
      selected: "create"
    };
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  createCompanyObject = e => {
    e.preventDefault();
    const {
      companyName,
      companyAddress,
      companyCity,
      companyState,
      companyZip
    } = this.state;

    let companyObj = {
      name: companyName,
      address_1: companyAddress,
      city: companyCity,
      state: companyState,
      postal_code: companyZip
    };
    // check if logo is being uploaded prior to adding to companyObj
    if (this.fileInput.current.files[0]) {
      let logo = this.fileInput.current.files[0].name;
      companyObj = Object.assign({}, { ...companyObj }, { logo: logo });
      alert(JSON.stringify(companyObj));
    } else {
      alert(JSON.stringify(companyObj));
    }
    if (this.props.company.selected === "create") {
      console.log(CreateCompany(companyObj));
    } else {
    }
  };
  static getDerivedStateFromProps(props, state) {
    if (props.selected !== state.selected) {
      return {
        selected: props.company.selected,
        companyName: props.company.companyName,
        companyAddress: props.company.companyAddress,
        companyZip: props.company.companyZip,
        companyState: props.company.companyState,
        companyCity: props.company.companyCity
      };
    } else {
      return {
        selected: "create",
        companyName: "",
        companyAddress: "",
        companyZip: "",
        companyState: "",
        companyCity: ""
      };
    }
  }
  render() {
    return (
      <section>
        <form onSubmit={this.createCompanyObject} className="form-column">
          <label forhtml="companyName">
            Company Name
            <input
              type="text"
              name="companyName"
              onChange={this.handleChange}
              value={this.state.companyName}
              placeholder="company name"
            />
          </label>
          <label forhtml="companyAddress">
            Address
            <input
              type="text"
              name="companyAddress"
              onChange={this.handleChange}
              value={this.state.companyAddress}
              placeholder="company address"
            />
          </label>
          <label forhtml="companyCity">
            City
            <input
              type="text"
              name="companyCity"
              onChange={this.handleChange}
              value={this.state.companyCity}
              placeholder="city"
            />
          </label>
          <label forhtml="companyState">
            State
            <input
              type="text"
              name="companyState"
              onChange={this.handleChange}
              value={this.state.companyState}
              placeholder="state"
            />
          </label>
          <label forhtml="companyZip">
            Zipcode
            <input
              type="text"
              name="companyZip"
              onChange={this.handleChange}
              value={this.state.companyZip}
              placeholder="zip"
            />
          </label>
          <label forhtml="companyLogo">
            Logo
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="companyLogo"
              ref={this.fileInput}
              id="logo-input"
            />
          </label>
          <p className="notes-caption">* Only accepts png/jpeg/jpg formats</p>
          <button type="submit">Save Company</button>
        </form>
      </section>
    );
  }
}

export default CompanyForm;
