import React, { Component } from "react";
//import styles
//import "./InvoiceView.css";

//import components
import SingleInvoiceView from "../../components/SingleInvoiceView";


export default class index extends Component {
  // No state held - views only render
  render() {
    return (
      <div>
        <SingleInvoiceView props={this.props}/>
      </div>
    );
  }
}
