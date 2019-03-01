import React from "react";

// import styles here
import "./PaymentRadio.css";

const PaymentRadio = props => {
  const { label } = props;
  return (
    <label htmlFor={label} className="payment_checkboxes">
      <input type="radio" name="payment" id={label} />
      {props.children}
    </label>
  );
};

export default PaymentRadio;
