import React, { Component } from "react";

// import components here
import InvoiceCard from "../InvoiceCard";
import CreateInvoiceButton from "../reusableComponents/CreateInvoiceButton";
import EmptyInvoices from "../EmptyInvoices";
import InvoiceViewForm from "../../components/InvoiceViewForm";
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
        },
        {
          invoiceNumber: 888,
          text: "link to invoice view",
          paidStatus: "current"
        }
      ]
    };
  }
  render() {
    const { empty, invoices } = this.state;

    return (
      <>
        <section>
          {empty ? (
            <EmptyInvoices />
          ) : (
            <section className="invoices-container">
              {invoices
                ? invoices.map(invoice => {
                    return (
                      <div>
                        <Link to={`/user/${this.props.id}/invoice/view`}>
                          <InvoiceCard
                            key={invoice.invoiceNumber}
                            invoice={{ ...invoice }}
                            id={this.props.id}
                          />
                        </Link>
                      </div>
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
        <div>
          <Link to={`/user/${this.props.id}/invoice/view`}>
            <div>Invoice View Form</div>
          </Link>
        </div>
      </>
    );
  }
}

export default Invoices;
