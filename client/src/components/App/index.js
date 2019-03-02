// import packages
import React, { Component } from "react";

//import styles
import "./App.css";

//imported components
import CreateInvoice from "../../views/CreateInvoice";

class App extends Component {
  render() {
    return (
      <div className="App">
        App Content
        <CreateInvoice />
      </div>
    );
  }
}

export default App;
