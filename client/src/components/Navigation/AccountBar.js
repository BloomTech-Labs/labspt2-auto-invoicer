import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import MyAutoInvoicerIcon from '../../assets/myai.png'
import styles from './styles'
import UserContext from '../../context/UserContext'

import SelectCompany from './SelectCompany'
import AccountMenu from './AccountMenu'

function AccountBar(props) {
  const context = useContext(UserContext)
  const { loggedIn, classes } = props
  return (
    <Toolbar className={classes.accountBarContainer}>
      <div className={classes.icon} >
        <Typography>
          {<Link 
            to={loggedIn ? `/user/${context.user._id}/dashboard` : `/` } >
            <img alt="" src={MyAutoInvoicerIcon} width="32" height="32" />
            <span className="company-name">myAutoInvoicer</span>
          </Link>}
        </Typography>
      </div>
      <div>
        {loggedIn ?
          <span className={classes.accountMenu}>
            <SelectCompany />
            <AccountMenu 
              handleSignOut={props.handleSignOut}
            /> 
          </span>:
          <div className="nav-right">
            <Typography>
              <span className="link">Features</span>
              <span className="link">Get Started</span>
              <span className="link" onClick={props.handleSignIn}>Sign In</span>
            </Typography>
          </div>
          }
      </div>
    </Toolbar>
  )
}

export default withStyles(styles)(AccountBar)