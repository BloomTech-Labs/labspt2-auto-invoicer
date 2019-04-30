import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'

function SelectCompany(props) {
  const {companies, handleSelect, selectedCompany, classes} = props
  return (
    <Select
      className={classes.companyDropDown}
      onChange={handleSelect} 
      value={selectedCompany}
      renderValue={value => `${value.name}`}>
        {companies.map( company => {
          return (
            <MenuItem value={company}>{company.name}</MenuItem>
          )
        })}
    </Select>
  )
}

export default withStyles(styles)(SelectCompany); 