import React from "react";
import PropTypes from "prop-types";

// import css here
import "./InvoiceCard.css";

const InvoiceCard = props => {
  const { invoiceNumber, invoiceNotes, invoiceDueDate, amountPaid, total, paidStatus } = props.invoice;
  return (
    <article className={`invoice-card ${paidStatus}`}>
      <h3>{invoiceNumber}</h3>
      <p>{invoiceDueDate}</p>
      <p>{total}</p>
      <p>{amountPaid}</p>
      <p>{invoiceNotes}</p>
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
