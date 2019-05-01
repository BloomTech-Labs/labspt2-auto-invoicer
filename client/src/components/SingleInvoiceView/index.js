import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import styles from "./style";

import "./SingleInvoiceView.css";
import { CompanyConsumer } from "../../contexts/CompanyContext";

class SingleInvoiceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5
    };
  }
  headerellipsis = str => {
    return str.length > 10 ? str.slice(0, 11) : str;
  };
  itemChecker = items => {
    let emptyItems = [{ item: "", quantity: "", rate: "", amount: "" }];
    return items ? items : emptyItems;
  };
  itemsLengthChecker = items => {
    return items ? items.length : 0;
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const themes = createMuiTheme({
      typography: {
        fontSize: 30,
        useNextVariants: true
      }
    });
    return (
      <CompanyConsumer>
        {({ companyState }) => {
          const { invoiceID } = this.props.props.match.params;
          const invoice = companyState.invoices.find(
            invoice => `${invoice._id}` === invoiceID
          );
          console.log(invoice.invoiceDescription);
          const emptyRows =
            rowsPerPage -
            Math.min(
              rowsPerPage,
              this.itemsLengthChecker(invoice.items) - page * rowsPerPage
            );
          return (
            <Grow in={true} {...{ timeout: 1300 }}>
              <Paper className={classes.paper}>
                <section>
                  <AppBar className={classes.appbar}>
                    <Toolbar>
                      <Typography
                        className={classes.headerTitle}
                        color="inherit"
                        noWrap
                      >
                        {this.capitalizeFirstLetter(invoice.companyName)}
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <div className="box-container bottom">
                    <div className="box">
                      <p>
                        <strong>
                          <span className="entryName">Invoice #:</span>
                        </strong>
                        {" " + invoice.invoiceNumber}
                        <br />
                        <strong>
                          <span className="entryName">Date:</span>
                        </strong>
                        {this.headerellipsis(" " + invoice.selectedDate)}
                        <br />
                        <strong>
                          <span className="entryName">Due Date:</span>
                        </strong>
                        {this.headerellipsis(" " + invoice.invoiceDueDate)}
                        <br />
                        <strong>
                          <span className="entryName">Amount Due:</span>
                        </strong>
                        {" $" + invoice.total}
                      </p>
                    </div>
                  </div>
                  <div className="box-container bottom">
                    <div className="box mobileBorder">
                      <p>
                        <strong>
                          <span className="entryName">From:</span>
                        </strong>
                        <br />
                        {invoice.addressFrom}
                      </p>
                    </div>
                    <div className="box">
                      <p>
                        <strong>
                          <span className="entryName">To:</span>
                        </strong>
                        <br />
                        {invoice.addressTo}
                        <br />
                        {invoice.cityTo},{" " + invoice.stateTo}
                        {"  " + invoice.zipCodeTo}
                        <br />
                        {invoice.emailTo}
                      </p>
                    </div>
                  </div>
                  <div className="box-container bottom">
                    <div className="box mobileBorder">
                      <p>
                        <strong>
                          <span className="entryName">
                            Invoice Description:
                          </span>
                        </strong>
                        <br />
                        {invoice.invoiceDescription + "."}
                      </p>
                    </div>
                    <div className="box">
                      <p className="subtotalTax">
                        Subtotal: ${invoice.subtotal}
                      </p>
                      <p className="shippingDiscount">
                        Discount: ${invoice.discount}
                      </p>
                      <p className="subtotalTax">
                        Tax:
                        {" " + Number(invoice.tax) * 100}%
                      </p>
                      <p className="shippingDiscount">
                        Shipping: ${invoice.shipping}
                      </p>
                      <p className="total-due">Total: ${invoice.total}</p>
                      <p className="amount-paid">
                        Amount Paid: ${invoice.amountPaid}
                      </p>
                    </div>
                  </div>
                  <div className="box-container">
                    <div className="box mobileBorder">
                      <p>
                        <strong>
                          <span className="entryName">
                            Notes (if applicable):
                          </span>{" "}
                        </strong>
                        <br />
                        {invoice.notes + "."}
                      </p>
                    </div>
                    <div className="box">
                      <p>
                        <strong>
                          <span className="entryName">
                            Terms (if applicable):
                          </span>
                        </strong>
                        <br />
                        {invoice.terms + "."}
                      </p>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <AppBar className={classes.appbar}>
                      <Toolbar>
                        <Typography
                          className={classes.title}
                          color="inherit"
                          noWrap
                        >
                          Invoice Items (if applicable)
                        </Typography>
                      </Toolbar>
                    </AppBar>
                  </div>
                  <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                      <TableBody>
                        <TableRow>
                          <TableCell className={classes.tablecell}>
                            Item
                          </TableCell>
                          <TableCell className={classes.tablecell}>
                            Quantity
                          </TableCell>
                          <TableCell className={classes.tablecell}>
                            Rate
                          </TableCell>
                          <TableCell className={classes.tablecell}>
                            Amount
                          </TableCell>
                        </TableRow>
                        {this.itemChecker(invoice.items)
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map(item => (
                            <TableRow
                              className={classes.tableRowHover}
                              key={item.item}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                                style={{
                                  fontSize: 25
                                }}
                              >
                                {item.item}
                              </TableCell>
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                                style={{ fontSize: 25 }}
                              >
                                {item.quantity}
                              </TableCell>
                              <TableCell
                                style={{ fontSize: 25 }}
                                align="center"
                              >
                                {item.rate}
                              </TableCell>
                              <TableCell
                                style={{ fontSize: 25 }}
                                align="center"
                              >
                                {item.amount}
                              </TableCell>
                            </TableRow>
                          ))}
                        {emptyRows > 0 && (
                          <TableRow
                            style={{
                              height: 48 * emptyRows
                            }}
                          >
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                      <TableFooter style={{ fontSize: 15 }}>
                        <TableRow style={{ fontSize: 15 }}>
                          <MuiThemeProvider theme={themes}>
                            <TablePagination
                              rowsPerPageOptions={[5, 10, 25]}
                              backIconButtonProps={{
                                "aria-label": "Previous Page"
                              }}
                              nextIconButtonProps={{
                                "aria-label": "Next Page"
                              }}
                              colSpan={3}
                              count={this.itemsLengthChecker(invoice.items)}
                              rowsPerPage={rowsPerPage}
                              page={page}
                              onChangePage={this.handleChangePage}
                              onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                          </MuiThemeProvider>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </section>
              </Paper>
            </Grow>
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default withStyles(styles)(SingleInvoiceView);
