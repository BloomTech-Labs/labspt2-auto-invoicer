import React from "react";
import PropTypes from "prop-types";

// import components here
import Modal from "../reusableComponents/Modal";

class ForgotPassModal extends React.Component {
  render() {
    return (
      <Modal close={this.props.click}>
        <p>test</p>
      </Modal>
    );
  }
}

ForgotPassModal.propTypes = {
  click: PropTypes.func.isRequired
};

export default ForgotPassModal;
