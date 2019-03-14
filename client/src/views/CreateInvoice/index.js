// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
import CreateInvoiceForm from "../../components/CreateInvoiceForm";
import GoogleCalApi from "../../components/GoogleCalApi";
import { UserConsumer } from "../../contexts/UserContext";
import { CompanyConsumer } from "../../contexts/CompanyContext";

export default class index extends Component {
  //No state held - views only render
  render() {
    return (
      <UserConsumer>
        {({ userState }) => {
          return (
            <CompanyConsumer>
              {({ companyState }) => {
                return (
                  <div>
                    Views Only.
                    <CreateInvoiceForm
                      click={this.props.click}
                      user={userState}
                      company={companyState}
                    />
                    <GoogleCalApi />
                  </div>
                );
              }}
            </CompanyConsumer>
          );
        }}
      </UserConsumer>
    );
  }
}
