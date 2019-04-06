import React from "react";
import PropTypes from "prop-types";

// import css here
import "./InvoiceCard.css";

const InvoiceCard = props => {
  const {
    invoiceNumber,
    invoiceNotes,
    invoiceDueDate,
    amountPaid,
    total,
    paid
  } = props.invoice;
  return (
    <article
      className={
        "status-" +
        (amountPaid >= total ? "paid invoice-card" : "unpaid invoice-card")
      }
    >
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
};

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
