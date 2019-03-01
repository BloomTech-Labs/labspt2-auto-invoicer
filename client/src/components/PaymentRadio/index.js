import React from "react";

// import styles here
import "./PaymentRadio.css";

const PaymentRadio = props => {
  const { label, handler } = props;
  return (
    <label htmlFor={label} className="payment_checkboxes">
      <input
        type="radio"
        name="payment"
        id={label}
        onChange={handler}
        value={label}
      />
      {props.children}
    </label>
  );
};

export default PaymentRadio;
