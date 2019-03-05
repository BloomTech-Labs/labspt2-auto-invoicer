import React from "react";
import PropTypes from "prop-types";

// import css here
import "./PaymentInfo.css";

const PaymentInfo = props => {
  const { cc, exp, cvv, title } = props.paymentInfo;
  const { changeHandler } = props;

  return (
    <fieldset className="payment_info">
      <legend>{title}</legend>
      <input
        type="text"
        onChange={changeHandler}
        name="cc"
        value={cc}
        placeholder="Credit Card #"
        maxLength={16}
        pattern="[0-9]{16}"
        required
      />
      <input
        type="text"
        onChange={changeHandler}
        name="exp"
        value={exp}
        placeholder="Expiration Date"
        maxLength={4}
        pattern="[0-9]{4}"
        required
      />
      <input
        type="text"
        onChange={changeHandler}
        name="cvv"
        value={cvv}
        placeholder="Cvv"
        pattern="[0-9]{3}"
        maxLength={3}
        required
      />
    </fieldset>
  );
};

PaymentInfo.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  paymentInfo: PropTypes.shape({
    cc: PropTypes.string.isRequired,
    exp: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    title: PropTypes.string
  })
};

export default PaymentInfo;
