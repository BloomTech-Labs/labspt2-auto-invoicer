import React from "react";
import PropTypes from "prop-types";

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

PaymentRadio.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default PaymentRadio;
