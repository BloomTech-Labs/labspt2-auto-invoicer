import React from 'react';
import { Link } from 'react-router-dom';

import MyAutoInvoicerIcon from '../../assets/myai.png';

import './Navigation.css';

const Navigation = props => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-left">
          {props.loggedIn ? (
            <Link to={`/user/${props.user.userID}/dashboard`}>
              <img alt="" src={MyAutoInvoicerIcon} width="32" height="32" />
              <span className="company-name">myAutoInvoicer</span>
            </Link>
          ) : (
            <Link to="/">
              <img alt="" src={MyAutoInvoicerIcon} width="32" height="32" />
              <span className="company-name">myAutoInvoicer</span>
            </Link>
          )}
        </div>
        {props.loggedIn ? (
          <div className="nav-right">
            <Link to={`/user/${props.user.userID}/dashboard`}>
              <span className="link">Dashboard</span>
            </Link>
            <Link to={`/user/${props.user.userID}/invoices`}>
              <span className="link">Invoices</span>
            </Link>
            <Link to={`/user/${props.user.userID}/billing`}>
              <span className="link">Billing</span>
            </Link>
            <Link to={`/user/${props.user.userID}/settings`}>
              <span className="link">Settings</span>
            </Link>
            <span className="link" onClick={props.handleSignOut}>
              Sign Out
            </span>
          </div>
        ) : (
          <div className="nav-right">
            <span className="link">Features</span>
            <span className="link">Get Started</span>
            <span className="link" onClick={props.handleSignIn}>
              Sign In
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
