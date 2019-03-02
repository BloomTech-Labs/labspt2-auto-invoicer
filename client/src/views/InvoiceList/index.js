// import packages
import React, { Component } from "react";

//import styles
import "./InvoiceList.css";

export default class index extends Component {
  render() {
    return (
      <div className="main-container">
        {" "}
        <div className="top-nav">Top Navigation Placeholder</div>
        <div className="mid-container">
          <div className="sidebar-nav">Sidebar Nav</div>
          <div className="invoice-list-container">Invoice List Container</div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
