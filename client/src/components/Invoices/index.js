import React, { Component } from "react";

// import components here
import InvoiceCard from "../InvoiceCard";
import CreateInvoiceButton from "../reusableComponents/CreateInvoiceButton";
import EmptyInvoices from "../EmptyInvoices";
import { Link } from "react-router-dom";

import { CompanyConsumer } from "../../contexts/CompanyContext";
import { UserConsumer } from "../../contexts/UserContext";
// import css here
import "./Invoices.css";

class Invoices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <UserConsumer>
        {({ userState }) => {
          return (
            <CompanyConsumer>
              {({ companyState }) => {
                const { invoices } = companyState;
                return (
                  <section>
                    {invoices.length < 1 ? (
                      <EmptyInvoices />
                    ) : (
                      <section className="invoices-container">
                        {invoices
                          ? invoices.map(invoice => {
                              return (
                                <Link to={`/user/${invoice._id}/invoice/view`}>
                                  <InvoiceCard
                                    id={invoice._id}
                                    key={invoice.invoiceNumber}
                                    invoice={{ ...invoice }}
                                  />
                                </Link>
                              );
                            })
                          : null}
                        :{" "}
                        <Link to={`/user/${this.props.id}/invoice/create`}>
                          <CreateInvoiceButton />
                        </Link>
                      </section>
                    )}
                  </section>
                );
              }}
            </CompanyConsumer>
          );
        }}
      </UserConsumer>

    );
  }
}

export default Invoices;
