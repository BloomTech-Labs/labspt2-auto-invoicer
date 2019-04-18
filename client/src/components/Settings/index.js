import React from 'react'
import UserDetails from './UserDetails';
import { Grid } from '@material-ui/core';

export default function index() {
  return (
    <div>
        <Grid container spacing={8} justify='space-around' wrap='wrap'>
          <Grid item xs>
            <UserDetails />
          </Grid>
          <Grid item xs>
          Company Details
          </Grid>
          <Grid item xs>
          Add User to Company
          </Grid>
      </Grid>
    </div>
  )
}
