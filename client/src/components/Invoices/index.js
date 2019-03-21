import React, { Component } from "react";

// import components here
import InvoiceCard from "../InvoiceCard";
import CreateInvoiceButton from "../reusableComponents/CreateInvoiceButton";
import EmptyInvoices from "../EmptyInvoices";
import { Link } from "react-router-dom";

// import css here
import "./Invoices.css";

class Invoices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: false,
      invoices: [
        {
          invoiceNumber: 1234567,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paidStatus: "late"
        },
        {
          invoiceNumber: 1234568383,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paidStatus: "paid"
        },
        {
          invoiceNumber: 1234568383,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paidStatus: "late"
        },
        {
          invoiceNumber: 1234568383,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paidStatus: "paid"
        },
        {
          invoiceNumber: 1234568383,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paidStatus: "current"
        }
      ]
    };
  }
  render() {
    const { empty, invoices } = this.state;

    return (
      <section>
        {empty ? (
          <EmptyInvoices />
        ) : (
          <section className="invoices-container">
            {invoices
              ? invoices.map(invoice => {
                  return (
                    <InvoiceCard
                      key={invoice.invoiceNumber}
                      invoice={{ ...invoice }}
                    />
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
  }
}

export default Invoices;
