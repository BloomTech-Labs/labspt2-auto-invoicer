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
    <article className={"status-" + (paid ? "paid" : "unpaid")}>
      <h3>Invoice Number:{invoiceNumber}</h3>
      <p>Invoice Due Date:{invoiceDueDate}</p>
      <p>Total:{total}</p>
      <p>Amount Paid:{amountPaid}</p>
      <p>Notes:{invoiceNotes}</p>
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
