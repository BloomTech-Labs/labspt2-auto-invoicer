import React, { Component } from "react";

// import components here
import InvoiceCard from "../InvoiceCard";
import CreateInvoiceButton from "../reusableComponents/CreateInvoiceButton";
import EmptyInvoices from "../EmptyInvoices";
import { Link } from "react-router-dom";

// temporary
import EditInvoiceForm from "../EditInvoiceForm";
import InvoiceViewForm from "../InvoiceViewForm";

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
                    <ul class="legend">
                      <li>
                        <span class="paid" /> Paid
                      </li>
                      <li>
                        <span class="late" /> Late
                      </li>
                      <li>
                        <span class="unpaid" /> Unpaid
                      </li>
                    </ul>
                    {invoices.length < 1 ? (
                      <Link
                        className="card-links"
                        to={`/user/${
                          userState.userID
                        }/invoice/create`}
                      >
                        <EmptyInvoices />
                      </Link>
                    ) : (
                      <section className="invoices-container">
                        {invoices
                          ? invoices.map(invoice => {
                              return (
                                <Link
                                  className="card-links"
                                  to={`/user/${userState.userID}/invoice/${
                                    invoice._id
                                  }/edit`}
                                >
                                  <InvoiceCard
                                    id={invoice._id}
                                    key={invoice.invoiceNumber}
                                    invoice={{
                                      ...invoice
                                    }}
                                  />
                                </Link>
                              );
                            })
                          : null}
                        :{" "}
                        <Link
                          className="card-links"
                          to={`/user/${
                            userState.userID
                          }/invoice/create`}
                        >
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