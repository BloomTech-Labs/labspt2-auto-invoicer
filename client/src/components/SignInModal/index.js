import React from "react";

//import css here
import "./SignInModal.css";

// import components here
import SignInForm from "../SignInForm";
import Modal from "../reusableComponents/Modal";

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  signInModal = () => {
    return this.props.click();
  };

  render() {
    return (
      <Modal close={this.props.click}>
        <h1 className="modal-title">Auto-Invoicer Sign In</h1>
        <SignInForm />
      </Modal>
    );
  }
}

export default SignInModal;
