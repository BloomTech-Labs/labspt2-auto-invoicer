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
      title: "Payment Info"
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  createPaymentObject = e => {
    e.preventDefault();

    console.log(this.state);
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
          <PaymentRadio label="9.99">
            <p>1 Month Subscription - $9.99</p>
          </PaymentRadio>
          <PaymentRadio label="0.99">
            <p>1 Invoice - $0.99</p>
          </PaymentRadio>
        </section>
      </form>
    );
  }
}

export default BillingForm;
