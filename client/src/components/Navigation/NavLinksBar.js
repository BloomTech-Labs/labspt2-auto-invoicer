import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'

import UserContext from '../../context/UserContext';
import style from './styles'

const NavNavLinksBar = props => {
  const context = useContext(UserContext)
  const { classes } = props
  return (
    <ToolBar className={classes.navLinksContainer}>
      <NavLink className={classes.navLink} to={`/user/${context.user._id}/dashboard`}>
        <span>Dashboard</span>
      </NavLink>
      <NavLink className={classes.navLink} to={`/user/${context.user._id}/invoices`}>
      <span>Invoices</span>
      </NavLink>
      <NavLink className={classes.navLink} to={`/user/${context.user._id}/billing`}>
      <span>Billing</span>
      </NavLink>
    </ToolBar>
  )
}

export default withStyles(style)(NavNavLinksBar)