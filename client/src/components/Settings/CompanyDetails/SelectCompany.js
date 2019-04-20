import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function SelectCompany(props) {
  const {companies, handleSelect, selectedCompany} = props
  return (
      <Select 
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
