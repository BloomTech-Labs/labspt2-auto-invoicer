import React from "react";
import Close from "@material-ui/icons/Close";

// import css here
import "./Modal.css";

class Modal extends React.Component {
  close = () => this.props.close();
  render() {
    return (
      <div className="backdrop">
        <div className="modal">
          <span className="close-icon" onClick={this.close}>
            <Close />
          </span>
          {/* if you want to add your own tags inside modal this is where they will output in this.props.children */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
