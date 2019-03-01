import React from "react";

<<<<<<< HEAD
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
        pattern="[0-9]"
        required
      />
      <input
        type="text"
        onChange={changeHandler}
        name="exp"
        value={exp}
        placeholder="Expiration Date"
        maxLength={4}
        pattern="[0-9]"
        required
      />
      <input
        type="text"
        onChange={changeHandler}
        name="cvv"
        value={cvv}
        placeholder="Cvv"
        pattern="[0-9]"
        maxLength={3}
        required
      />
    </fieldset>
  );
};
=======
// import styles here
import "./PaymentInfo.css";

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cc: "",
      exp: "",
      cvv: "",
      price: 0,
      title: "Payment Info"
    };
  }

  render() {
    const { cc, exp, cvv, title } = this.state;
    return (
      <form className="form">
        <fieldset>
          <legend>{title}</legend>
          <input
            onChange={this.changeHandler}
            name="cc"
            value={cc}
            placeholder="Credit Card #"
          />
          <input
            onChange={this.changeHandler}
            name="exp"
            value={exp}
            placeholder="Expiration Date"
          />
          <input
            onChange={this.changeHandler}
            name="cvv"
            value={cvv}
            placeholder="cvv"
          />
        </fieldset>
      </form>
    );
  }
}
>>>>>>> 2c09fbc70e443d2259ff835ca0693563e481fb08

export default PaymentInfo;
