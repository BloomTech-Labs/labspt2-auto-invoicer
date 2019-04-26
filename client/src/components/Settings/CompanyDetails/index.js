import React, { Component } from 'react'

import { UserConsumer } from '../../../contexts/UserContext';

import ViewCompanyDetails from './ViewCompanyDetails'
import EditCompanyDetails from './EditCompanyDetails'
import SelectCompany from './SelectCompany'

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'

import {FetchCompany} from '../../../graphQL/queries/companies'

class CompanyDetails extends Component {
  state = {
    edit: false,
    selectedCompany: '',
    companyData: ''
  }

  toggleView = () => {
    this.setState( prevState => ({
      edit: !prevState.edit
    }))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSelect = async e => {
    const companyData = await this.fetchCompany(e.target.value)
    this.setState({selectedCompany: e.target.value, companyData})
  }

  handleUpdatedCompany = async companyID => {
    const companyData = await this.fetchCompany(companyID);
    this.setState({companyData})
  }

  setDefaultCompany = async company => {
    if (!this.state.selectedCompany && company) {
      const companyData = await this.fetchCompany(company)
      this.setState({selectedCompany: company, companyData})
    }
  }

  fetchCompany = async companyID => {
    const returnedData = `_id name email phone_num address_1 address_2 city state postal_code`
    const result = await FetchCompany(companyID._id, returnedData)
    return result.company
  }

  render() {
    const { classes } = this.props;
    return (
      <UserConsumer>
        {({userState: {companies, defaultCompany}, fetchUserCompanies}) => {
            this.setDefaultCompany(defaultCompany)
          return (
            <Paper className={classes.cards}>
              <SelectCompany
                companies={companies} 
                handleSelect={this.handleSelect}
                selectedCompany={this.state.selectedCompany} />
              {!this.state.edit ?
              <ViewCompanyDetails 
                company={this.state.companyData}
                toggleView={this.toggleView}/> :
              <EditCompanyDetails 
              company={this.state.companyData}
              fetchUserCompanies={fetchUserCompanies}
              fetchCurrentCompany={this.handleUpdatedCompany}
              toggleView={this.toggleView} />}
            </Paper>
          )
        }}
      </UserConsumer>
    )
  }
}

export default withStyles(styles)(CompanyDetails); 