import React, { Component } from 'react';

import { Paper, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import styles from './styles';
import styled from 'styled-components';

import InvoiceNumberInput from './InvoiceNumberInput';
import DateIssue from './DateIssue';
import DueDate from './DueDate';
import InvoiceDescription from './InvoiceDescription';

import CompanyDropDown from './CompanyDropDown';
//import BillTo from "./BillTo";
import InvoiceItemInput from './InvoiceItemInput';
import InvoiceItemTableHead from './InvoiceItemTableHead';
//import InvoiceBalance from "./InvoiceBalance";
// import InvoiceNotesTerms from './InvoiceNotesTerms';
import CityTo from './CityTo';
import StateTo from './StateTo';
import ZipTo from './ZipTo';

import AddressTo from './AddressTo';
import EmailTo from './EmailTo';
import Subtotal from './Subtotal';
import Discount from './Discount';
import Tax from './Tax';
import Shipping from './Shipping';
import Total from './Total';
import AmountPaid from './AmountPaid';
import BalanceDue from './BalanceDue';
import { CreateInvoice } from '../../graphQL/mutations/invoices';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { CompanyConsumer } from '../../contexts/CompanyContext';
import { UserConsumer } from '../../contexts/UserContext';

import { CustomerFormDialog } from '../CustomerFormDialog';
import { CompanyFormDialog } from '../CompanyFormDialog';
import { th } from 'date-fns/esm/locale';

// import history from '../reusableComponents/history/history'

//@media (max-width: 500px)
const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;

  height: 125px;
  width: 100%;

  @media (max-width: 600px) {
    height: 300px;
    width: 400px;

    flex-direction: column;
  }
`;

const StyledAddress = styled.section`
  padding-top: 10px;
  padding-left: 10px;
  height: 475px;

  display: flex;

  @media (max-width: 600px) {
    width: 410px;
  }
`;

const StyledInvoiceItem = styled.section`
  padding-top: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  height: auto;

  @media (max-width: 600px) {
    width: 420px;
  }
`;

const StyledButton = styled(Button)`
  width: 100px;

  @media (max-width: 600px) {
    width: 400px;
    height: 50px;
    font-size: 2em;
  }
`;

const StyledInvoiceBalance = styled.section`
  padding-top: 25px;

  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    padding-left: 20px;
    flex-direction: column-reverse;
    width: 400px;
  }
`;

class CreateInvoiceForm2 extends Component {
  state = {
    createdBy: this.props.user._id,
    number: '',
    description: '',
    terms: '',
    date: '',
    dueDate: '',
    company: {
      _id: '',
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: ''
    },
    customer: {
      _id: '',
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: ''
    },
    items: [],
    subtotal: '',
    discount: '',
    tax: '',
    shipping: '',
    total: '',
    balance: '',
    notes: '',
    companyId: '',
    customerId: '',
    openCompanyDialog: false,
    openCustomerDialog: false
  };

  handleClose = () => {
    this.setState({ openCompanyDialog: false, openCustomerDialog: false });
  };

  handleSelectCustomer = e => {
    if (e.target.value === 'new') {
      this.setState({
        openCustomerDialog: true,
        customerId: '',
        customer: {
          _id: '',
          name: '',
          email: '',
          phoneNumber: '',
          address1: '',
          address2: '',
          zipCode: '',
          city: '',
          state: ''
        }
      });
    }

    if (e.target.value !== 'new') {
      const [customer] = this.props.company.customers.filter(
        customer => customer._id === e.target.value
      );
      const {
        _id,
        name,
        email,
        phoneNumber,
        address1,
        address2,
        zipCode,
        city,
        state
      } = customer;
      this.setState({
        [e.target.name]: e.target.value,
        customer: {
          _id,
          name,
          email,
          phoneNumber,
          address1,
          address2,
          zipCode,
          city,
          state
        }
      });
    }
  };

  handleSelectCompany = e => {
    if (e.target.value === 'new') {
      this.setState({
        openCompanyDialog: true,
        companyId: '',
        company: {
          _id: '',
          name: '',
          email: '',
          phoneNumber: '',
          address1: '',
          address2: '',
          zipCode: '',
          city: '',
          state: ''
        }
      });
    }

    if (e.target.value !== 'new') {
      const [company] = this.props.user.companies.filter(
        company => company._id === e.target.value
      );
      const {
        _id,
        name,
        email,
        phoneNumber,
        address1,
        address2,
        zipCode,
        city,
        state
      } = company;
      this.setState({
        [e.target.name]: e.target.value,
        company: {
          _id,
          name,
          email,
          phoneNumber,
          address1,
          address2,
          zipCode,
          city,
          state
        }
      });
    }
  };

  handleInputChange = name => event => {
    if (name === 'customer') {
      console.log('event: ', event);
      console.log('even.target in handleInputChange: ', event.target);
      console.log('name in handleInputChange: ', name);
    }
    this.setState({ [name]: event.target.value });
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleInvoiceDueDateChange = date => {
    this.setState({ dueDate: date });
  };

  handleBillToItemsChange = event => {
    if (
      ['address1', 'address2', 'city', 'state', 'zip', 'email'].includes(
        event.target.className
      )
    ) {
      const billToItems = [...this.state.billToItems];
      billToItems[event.target.dataset.id][
        event.target.className
      ] = event.target.value.toUpperCase();
      this.setState({ billToItems }, () => console.log('Bill To Items'));
    } else {
      this.setState({ [event.target.name]: event.target.value.toUpperCase() });
    }
  };

  handleInvoiceItemsInputChange = e => {
    if (['item', 'quantity', 'rate', 'amount'].includes(e.target.className)) {
      const invoiceItems = [...this.state.invoiceItems];
      invoiceItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceItems }, () => console.log('Invoice Items'));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addInvoiceItem = e => {
    e.preventDefault();
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { name: '', description: '', quantity: '', cost: '', amount: '' }
      ]
    }));
  };

  handleInvoiceBalanceItemsChange = e => {
    if (
      [
        'subtotal',
        'discount',
        'tax',
        'shipping',
        'total',
        'amountPaid'
      ].includes(e.target.className)
    ) {
      const invoiceBalanceItems = [...this.state.invoiceBalanceItems];
      invoiceBalanceItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceBalanceItems }, () =>
        console.log('Invoice Balance Items')
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  handleInvoiceNotesTermsItemsChange = e => {
    if (['notes', 'terms'].includes(e.target.className)) {
      const invoiceNotesTermsItems = [...this.state.invoiceNotesTermsItems];
      invoiceNotesTermsItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceNotesTermsItems }, () =>
        console.log('Invoice Notes & Terms items')
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  // ZipCode & Tax API

  // Tax Rate from API
  getTaxRateObject = zip => {
    if (zip) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/taxes/${zip}`)
        .then(res => {
          this.setState({ tax: res.data.rate.combined_rate });
        });
    }
  };

  // ZipcodeApi Function
  zipcodeApiAutofill = () => {
    if (this.state.zipCodeTo.length > 4) {
      // clientkey comes from zipcodeapi.com for client side key after registering for api key
      const clientKey =
        'js-2zEUwuIKNMSQvyjRbj8Ko7OQy0PdrquR9s6rvdbZTjcFvP9HYEQVp0dqAXVc27jZ';
      const zipcode = this.state.zipCodeTo;
      const url = `https://www.zipcodeapi.com/rest/${clientKey}/info.json/${zipcode}/radians`;
      axios
        .get(url)
        .then(res => {
          this.setState({
            cityTo: res.data.city,
            stateTo: res.data.state
          });

          return this.getTaxRateObject(zipcode);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
    } else {
      this.setState({ cityTo: '', stateTo: '', tax: '' });
    }
  };

  handleZipCodeToChange = async e => {
    await this.setState({ zipCodeTo: e.target.value });
    this.zipcodeApiAutofill();
  };

  // handleClearForm = e => {
  //   e.preventDefault();
  //   this.setState({
  //     invoiceNumber: "",
  //     invoiceDescription: ""
  //   });
  // };

  handleFormSubmit = e => {
    e.preventDefault();
    const formPayload = {
      createdBy: this.state.createdBy,
      number: this.state.number,
      description: this.state.description,
      terms: this.state.terms,
      date: this.state.date,
      dueDate: this.state.dueDate,
      company: {
        _id: this.state.company._id,
        name: this.state.company.name,
        email: this.state.company.email,
        phoneNumber: this.state.company.phoneNumber,
        address1: this.state.company.address1,
        address2: this.state.company.address2,
        zipCode: this.state.company.zipCode,
        city: this.state.company.city,
        state: this.state.company.state
      },
      customer: {
        _id: this.state.customer._id,
        name: this.state.customer.name,
        email: this.state.customer.email,
        phoneNumber: this.state.customer.phoneNumber,
        address1: this.state.customer.address1,
        address2: this.state.customer.address2,
        zipCode: this.state.customer.zipCode,
        city: this.state.customer.city,
        state: this.state.customer.state
      },
      subtotal: this.state.subtotal,
      discount: this.state.discount,
      tax: this.state.tax,
      shipping: this.state.shipping,
      total: this.state.total,
      balance: this.state.balance,
      notes: this.state.notes
    };
    console.log(formPayload);
    // CreateInvoice(formPayload, '_id');
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/graphql`, {
      query: `
      mutation {
        createInvoice(invoiceInput: {
          createdBy: "${this.state.createdBy}",
          number: "${this.state.number}",
          description: "${this.state.description}",
          terms: "${this.state.terms}",
          date: "${this.state.date}",
          dueDate: "${this.state.dueDate}",
          company: {
            _id: "${this.state.company._id}",
            name: "${this.state.company.name}",
            email: "${this.state.company.email}",
            phoneNumber: "${this.state.company.phoneNumber}",
            address1: "${this.state.company.address1}",
            address2: "${this.state.company.address2}",
            zipCode: "${this.state.company.zipCode}",
            city: "${this.state.company.city}",
            state: "${this.state.company.state}"
          },
          customer: {
            _id: "${this.state.customer._id}",
            name: "${this.state.customer.name}",
            email: "${this.state.customer.email}",
            phoneNumber: "${this.state.customer.phoneNumber}",
            address1: "${this.state.customer.address1}",
            address2: "${this.state.customer.address2}",
            zipCode: "${this.state.customer.zipCode}",
            city: "${this.state.customer.city}",
            state: "${this.state.customer.state}"
          },
          subtotal: "${this.state.subtotal}",
          discount: "${this.state.discount}",
          tax: "${this.state.tax}",
          shipping: "${this.state.shipping}",
          total: "${this.state.total}",
          balance: "${this.state.balance}",
          notes: "${this.state.notes}"
        } ) {
          _id
        }
    }`
    });
    this.props.fetchInvoices();
    this.props.history.push(`/user/${this.props.user._id}/invoices`);
    console.log(this.props);
    console.log(formPayload);
  };

  render() {
    const { classes } = this.props;
    return (
      <UserConsumer>
        {({ userState }) => {
          return (
            <CompanyConsumer>
              {({ companyState }) => {
                return (
                  <Grid container spacing={16}>
                    <Paper className={classes.paper}>
                      <div className={classes.container}>
                        <StyledSection>
                          <Grid item xs={12} sm={6}>
                            <InvoiceNumberInput
                              onChangeHandler={this.handleInputChange('number')}
                              value={this.state.number}
                            />
                            <TextField
                              id="terms"
                              label="Terms"
                              className={classes.textField}
                              value={this.state.terms}
                              style={{ width: 400 }}
                              InputLabelProps={{ style: { fontSize: 12 } }}
                              InputProps={{
                                style: { fontSize: 12 }
                              }}
                              margin="normal"
                              variant="filled"
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <DateIssue
                              onChangeHandler={this.handleDateChange}
                              value={this.state.date}
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <DueDate
                              onChangeHandler={this.handleInvoiceDueDateChange}
                              value={this.state.dueDate}
                            />
                          </Grid>
                        </StyledSection>
                        <StyledSection>
                          <Grid item xs={9}>
                            <InvoiceDescription
                              onChangeHandler={this.handleInputChange(
                                'description'
                              )}
                              value={this.state.description}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            {/* <CompanyDropDown
                              onChangeHandler={this.handleInputChange(
                                'company'
                              )}
                              value={this.state.company}
                            /> */}
                          </Grid>
                        </StyledSection>

                        <TextField
                          name="companyId" // event.target.name
                          id="company"
                          select
                          label="Company"
                          className={classes.textField}
                          value={this.state.companyId}
                          onChange={this.handleSelectCompany}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu
                            }
                          }}
                          helperText="Select a company"
                          margin="normal"
                        >
                          {this.props.user.companies.map(company => (
                            <MenuItem key={company._id} value={company._id}>
                              {company.name}
                            </MenuItem>
                          ))}
                          <MenuItem value="new">Add New Company</MenuItem>
                        </TextField>
                        {this.state.openCompanyDialog ? (
                          <CompanyFormDialog onClose={this.handleClose} />
                        ) : null}

                        <TextField
                          name="customerId" // event.target.name
                          id="customer"
                          select
                          label="Customer"
                          className={classes.textField}
                          value={this.state.customerId}
                          onChange={this.handleSelectCustomer}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu
                            }
                          }}
                          helperText="Select a customer"
                          margin="normal"
                        >
                          {this.props.company.customers.map(customer => (
                            <MenuItem key={customer._id} value={customer._id}>
                              {customer.name}
                            </MenuItem>
                          ))}
                          <MenuItem value="new">Add New Customer</MenuItem>
                        </TextField>
                        {this.state.openCustomerDialog ? (
                          <CustomerFormDialog onClose={this.handleClose} />
                        ) : null}

                        <Grid item xs={4}>
                          <TextField
                            id="company-address1"
                            label="Company Address 1"
                            className={classes.textField}
                            value={this.state.company.address1}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="company-address2"
                            label="Company Address 2"
                            className={classes.textField}
                            value={this.state.company.address2}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="company-zipCode"
                            label="Company Zip Code"
                            className={classes.textField}
                            value={this.state.company.zipCode}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="company-city"
                            label="Company City"
                            className={classes.textField}
                            value={this.state.company.city}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="company-state"
                            label="Company State"
                            className={classes.textField}
                            value={this.state.company.state}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="company-email"
                            label="Company Email"
                            className={classes.textField}
                            value={this.state.company.email}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />

                          <TextField
                            id="customer-address1"
                            label="Customer Address 1"
                            className={classes.textField}
                            value={this.state.customer.address1}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="customer-address2"
                            label="Customer Address 2"
                            className={classes.textField}
                            value={this.state.customer.address2}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="customer-zipCode"
                            label="Customer Zip Code"
                            className={classes.textField}
                            value={this.state.customer.zipCode}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="customer-city"
                            label="Customer City"
                            className={classes.textField}
                            value={this.state.customer.city}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="customer-state"
                            label="Customer State"
                            className={classes.textField}
                            value={this.state.customer.state}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                          <TextField
                            id="customer-email"
                            label="Customer Email"
                            className={classes.textField}
                            value={this.state.customer.email}
                            style={{ width: 400 }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            InputProps={{
                              style: { fontSize: 12 }
                            }}
                            margin="normal"
                            variant="filled"
                          />
                        </Grid>

                        <StyledInvoiceItem>
                          <Grid item xs={12} sm={12}>
                            <form
                              onSubmit={this.handleFormSubmit}
                              onChange={this.handleInvoiceItemsInputChange}
                            >
                              <InvoiceItemTableHead />
                              <InvoiceItemInput items={this.state.items} />
                              <StyledButton
                                variant="contained"
                                color="secondary"
                                onClick={this.addInvoiceItem}
                              >
                                Add Line Item +
                              </StyledButton>
                            </form>
                          </Grid>
                        </StyledInvoiceItem>
                        <StyledInvoiceBalance>
                          <Grid item xs={4}>
                            <form
                              onSubmit={this.handleFormSubmit}
                              onChange={this.handleInvoiceNotesTermsItemsChange}
                            >
                              <TextField
                                id="notes"
                                label="Notes"
                                className={classes.textField}
                                value={this.state.notes}
                                style={{ width: 400 }}
                                InputLabelProps={{ style: { fontSize: 12 } }}
                                InputProps={{
                                  style: { fontSize: 12 }
                                }}
                                margin="normal"
                                variant="filled"
                              />
                              {/* <InvoiceNotesTerms
                                invoiceNotesTermsItems={
                                  this.state.invoiceNotesTermsItems
                                }
                              /> */}
                            </form>
                          </Grid>
                          <Grid item xs={4}>
                            <Subtotal
                              onChangeHandler={this.handleInputChange(
                                'subtotal'
                              )}
                              value={this.state.subtotal}
                            />
                            <Discount
                              onChangeHandler={this.handleInputChange(
                                'discount'
                              )}
                              value={this.state.discount}
                            />
                            <Tax
                              onChangeHandler={this.handleInputChange('tax')}
                              value={this.state.tax * 100 + `%`}
                            />

                            <Shipping
                              onChangeHandler={this.handleInputChange(
                                'shipping'
                              )}
                              value={this.state.shipping}
                            />
                            <Total
                              onChangeHandler={this.handleInputChange('total')}
                              value={this.state.total}
                            />
                            <BalanceDue
                              onChangeHandler={this.handleInputChange(
                                'balance'
                              )}
                              value={this.state.balance}
                            />
                          </Grid>
                        </StyledInvoiceBalance>
                        <StyledButton
                          onClick={this.handleFormSubmit}
                          variant="contained"
                          color="primary"
                        >
                          Generate
                        </StyledButton>
                      </div>
                    </Paper>
                  </Grid>
                );
              }}
            </CompanyConsumer>
          );
        }}
      </UserConsumer>
    );
  }
}

export default withStyles(styles)(CreateInvoiceForm2);
