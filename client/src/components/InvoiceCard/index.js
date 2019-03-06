import React from "react";
import PropTypes from "prop-types";

// import css here
import "./InvoiceCard.css";

const InvoiceCard = props => {
  const { invoiceNumber, text, paidStatus } = props.invoice;
  return (
    <article className={`invoice-card ${paidStatus}`}>
      <h3>{invoiceNumber}</h3>
      <p>{text}</p>
    </article>
  );
};

InvoiceCard.propTypes = {
  invoice: PropTypes.shape({
    invoiceNumber: PropTypes.number,
    text: PropTypes.string,
    paidStatus: PropTypes.string
  })
};

export default InvoiceCard;
