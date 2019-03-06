import React from "react";

//import components here
import AddIcon from "@material-ui/icons/AddCircle";

// import styles here
import "./EmptyInvoices.css";

const EmptyInvoices = props => {
  return (
    <section className="invoices-container empty-invoices">
      <article className="invoice-card add-invoice">
        <h3>Add a New Invoice</h3>
        <AddIcon />
      </article>
    </section>
  );
};

export default EmptyInvoices;
