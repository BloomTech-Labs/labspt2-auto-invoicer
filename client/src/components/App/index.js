// import packages
import React, { Component } from "react";

//import styles
import "./App.css";

//imported components
import InvoiceList from "../../views/InvoiceList";

class App extends Component {
  render() {
    return (
      <div className="App">
        App Content
        <InvoiceList />
      </div>
    );
  }
}

export default App;
