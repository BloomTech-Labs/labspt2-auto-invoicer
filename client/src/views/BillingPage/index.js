import React from "react";

// import components here
import BillingForm from "../../components/BillingForm";

// import styles here
import "./BillingPage.css";

const BillingPage = props => {
  return (
    <section>
      <h1 className="main-title">Billing</h1>
      <BillingForm />
    </section>
  );
};

export default BillingPage;
