import React from "react";
import { render } from "react-testing-library";
import { Provider } from "react-redux";
import SignUpForm from "../SignUpForm";
import { createStore } from "redux";
import rootReducer from "../../reducers/combineReducer";
const store = createStore(rootReducer);

describe("<SignUpForm />", () => {
  it("renders Sign Up Form Component", () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
  });
});
