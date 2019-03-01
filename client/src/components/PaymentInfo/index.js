import React from "react";

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

export default PaymentInfo;
