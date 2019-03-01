// import packages
import React, { Component } from "react";

//import styles
import "./InvoiceList.css";

export default class index extends Component {
  render() {
    return (
      <div className="invoice-list-container">
        {" "}
        Invoice List Tada
        <div className="top-nav">Top Navigation Placeholder</div>
        <div className="sidebar-nav">Sidebar Navigation placeholder</div>
        <div className="new-invoice-button">Add a new Invoice Button</div>
      </div>
    );
  }
}
