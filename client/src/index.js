import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

// redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/combineReducer";

// redux middleware imports
import thunk from "redux-thunk";
import logger from "redux-logger";

// setup all middleware here
const middleware = applyMiddleware(logger, thunk);

// create the store here
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
