import React from "react";

// react router dom
import { Link } from "react-router-dom";

const AuthSecured = props => {
  return (
    <ul className="auth-container">
      <p className="credits">Credits: {props.credits}</p>
      <Link to="/" id="signOut" onClick={props.signOut}>
        Sign Out
      </Link>
    </ul>
  );
};

export default AuthSecured;
