import React from "react";

// import components here
import PaymentInfo from "../PaymentInfo";
import PaymentRadio from "../PaymentRadio";
import Button from "../reusableComponents/Button";
// import css here
import "./BillingForm.css";

class BillingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cc: "",
      exp: "",
      cvv: "",
      title: "Payment Info",
      payment: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  createPaymentObject = e => {
    e.preventDefault();
    const { cc, exp, cvv, payment } = this.state;
    const paymentObject = { cc, exp, cvv, payment };

    // change console log when we start adding redux and stripe payments
    console.log(paymentObject);
  };
  render() {
    const paymentInfo = Object.create(this.state);
    return (
      <form className="billing_form" onSubmit={this.createPaymentObject}>
        <div className="payment_area">
          <PaymentInfo
            paymentInfo={paymentInfo}
            changeHandler={this.changeHandler}
          />
          <Button>Buy Now</Button>
        </div>
        <section>
          <PaymentRadio label="9.99" handler={this.changeHandler}>
            <p>1 Month Subscription - $9.99</p>
          </PaymentRadio>
          <PaymentRadio label="0.99" handler={this.changeHandler}>
            <p>1 Invoice - $0.99</p>
          </PaymentRadio>
        </section>
      </form>
    );
  }
}

export default BillingForm;
