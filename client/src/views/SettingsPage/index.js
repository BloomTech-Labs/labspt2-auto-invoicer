import React from "react";
import PropTypes from "prop-types";

// import components here
import SettingsForm from "../../components/SettingsForm";
import CompanyForm from "../../components/CompanyForm";
import CompanyDropdownList from "../../components/CompanyDropdownList";
// import styles here
import "./SettingsPage.css";

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "create",
      companyList: [
        {
          companyName: "testing",
          companyZip: "30000",
          companyCity: "Devlopeville",
          companyState: "GA",
          companyAddress: "123 fake rd."
        },
        {
          companyName: "another test",
          companyZip: "30000",
          companyCity: "Devlopeville",
          companyState: "GA",
          companyAddress: "123 fake rd."
        },
        {
          companyName: "more testing",
          companyZip: "30000",
          companyCity: "Devlopeville",
          companyState: "GA",
          companyAddress: "123 fake rd."
        }
      ],
      currentCompany: {}
    };
  }
  handleChange = e => {
    this.state.companyList.map(company => {
      if (company.companyName === e.target.value) {
        return this.setState({
          selected: e.target.value,
          currentCompany: company
        });
      }
    });
    if (e.target.value === "create") {
      return this.setState({
        currentCompany: {
          companyName: "",
          companyZip: "",
          companyCity: "",
          companyState: "",
          companyAddress: ""
        }
      });
    }
  };
  render() {
    return (
      <section className="settings-view">
        <div>
          <h3>Personal Info</h3>
          <SettingsForm />
        </div>
        <div>
          <h3>Company Info</h3>
          {/* add a drop down for current companies and auto fill company form when clicked. Change state of form button from save to edit */}
          <CompanyDropdownList
            companies={this.state.companyList}
            handleChange={this.handleChange}
          />

          {this.state.selected === "create" ? (
            <CompanyForm
              company={{
                currentCompany: {
                  companyName: "",
                  companyZip: "",
                  companyCity: "",
                  companyState: "",
                  companyAddress: ""
                }
              }}
            />
          ) : (
            <CompanyForm company={this.state.currentCompany} />
          )}
        </div>
      </section>
    );
  }
}

export default SettingsPage;
