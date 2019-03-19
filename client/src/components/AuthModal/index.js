import React from "react";

//import css here
import "./AuthModal.css";

import Modal from "../reusableComponents/Modal";

const AuthModal = props => {
  return (
    <Modal close={props.click}>
      <h1 className="modal-title">Auth Modal</h1>
    </Modal>
  );
};

export default AuthModal;
