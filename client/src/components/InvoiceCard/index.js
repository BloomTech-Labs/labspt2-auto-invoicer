import React from "react";
import PropTypes from "prop-types";

// import css here
import "./InvoiceCard.css";

class InvoiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        invoiceDueDate: this.props.invoice.invoiceDueDate,
        amountPaid: this.props.invoice.amountPaid,
        total: this.props.invoice.total,
        paid: this.props.invoice.paid
      }
    };
  
  lateChecker = date => {
    let year = date.slice(11, 15);
    let month = date.slice(4, 7);
    let day = date.slice(8, 10);
    let monthConvertedToNumber = 0;
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let monthInNumberForm = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    for (let i = 0; i < months.length; i++) {
      if (months[i] === month) {
        monthConvertedToNumber = monthInNumberForm[i];
      }
    }
    let dateInNumberForm = parseInt(year + monthConvertedToNumber + day, 10);
    return dateInNumberForm;
  };
  visualClass = () => {
    if (this.state.amountPaid >= this.state.total) {
      return "status-paid invoice-card";
    } else if (
      this.lateChecker(Date()) >
      this.lateChecker(String(this.state.invoiceDueDate))
    ) {
      return "status-late invoice-card";
    } else {
      return "status-unpaid invoice-card";
    }
  };
  render() {
    const {
      invoiceNumber,
      invoiceNotes,
      invoiceDueDate,
      amountPaid,
      total,
      paid
    } = this.props.invoice;
    return (
      <article className={this.visualClass()}>
        <h3>Invoice Number: {invoiceNumber}</h3>
        <p>
          <u>Invoice Due Date:</u>
          <br /> {invoiceDueDate}
        </p>
        <p>
          <u>Total:</u>
          <br /> ${total}
        </p>
        <p>
          <u>Amount Paid:</u>
          <br /> ${amountPaid}
        </p>
        <p>
          <u>Notes:</u>
          <br /> {invoiceNotes}
        </p>
      </article>
    );
  }
}

InvoiceCard.propTypes = {
  invoice: PropTypes.shape({
    invoiceNumber: PropTypes.number,
    invoiceDueDate: PropTypes.string,
    total: PropTypes.string,
    amountPaid: PropTypes.string,
    invoiceNotes: PropTypes.string,
    paidStatus: PropTypes.string
  })
};

export default InvoiceCard;
