import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

//Context API import
import { UserProvider, UserConsumer } from "./contexts/UserContext";
import { CompanyProvider, CompanyConsumer } from "./contexts/CompanyContext";


ReactDOM.render(
  <UserProvider>
    <CompanyProvider>
    <Router>
      <UserConsumer>
        {({fetchUser}) => {
          return (
          <CompanyConsumer>
            {({fetchCompany}) => {
              return (
                <App 
                  fetchUser = {fetchUser}
                  fetchCompany = {fetchCompany}
                />
              )
            }}
          </CompanyConsumer>
        )}}
      </UserConsumer>
    </Router>
    </CompanyProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
