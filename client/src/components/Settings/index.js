import React from 'react'
import { Grid } from '@material-ui/core';

import UserDetails from './UserDetails';
import CompanyDetails from './CompanyDetails'

export default function index() {
  return (
    <div>
        <Grid container spacing={8} justify='space-around' wrap='wrap'>
          <Grid item xs>
            <UserDetails />
          </Grid>
          <Grid item xs>
            <CompanyDetails />
          </Grid>
          <Grid item xs>
          Add User to Company
          </Grid>
      </Grid>
    </div>
  )
}
