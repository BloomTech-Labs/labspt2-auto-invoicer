import React from "react";

//import css here
import "./SignInModal.css";

// import components here
import SignInForm from "../SignInForm";
import Modal from "../reusableComponents/Modal";

const SignInModal = props => {
  return (
    <Modal close={props.click}>
      <h1 className="modal-title">Auto-Invoicer Sign In</h1>
      <SignInForm />
      <p className="forgot secondary" onClick={props.forgot}>
        Forgot Password?
      </p>
      <p className="auth-login secondary" onClick={props.auth}>
        Login Using Auth?
      </p>
    </Modal>
  );
};

export default SignInModal;
