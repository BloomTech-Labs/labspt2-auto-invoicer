import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Edit from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Money from "@material-ui/icons/AttachMoney";
import Tooltip from "@material-ui/core/Tooltip";
// import components here
import Typography from "@material-ui/core/Typography";

import CreateInvoiceButton from "../reusableComponents/CreateInvoiceButton";
import EmptyInvoices from "../EmptyInvoices";
import { Link } from "react-router-dom";

// temporary
import EditInvoiceForm from "../EditInvoiceForm";
import InvoiceViewForm from "../InvoiceViewForm";

import { CompanyConsumer } from "../../contexts/CompanyContext";
import { UserConsumer } from "../../contexts/UserContext";
// import css here
import "./Invoices.css";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>

        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class Invoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5
    };
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  dueDate = str => {
    return str.length > 10 ? str.slice(0, 10) : str;
  };
  ellipsis = str => {
    let shortened = str.length > 7 ? str.slice(0, 7) + "..." : str;
    return shortened;
  };
  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  lateChecker = date => {
    let year = date.slice(11, 15);
    let month = date.slice(4, 7);
    let day = date.slice(8, 10);
    let monthConvertedToNumber = 0;
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let monthInNumberForm = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    for (let i = 0; i < months.length; i++) {
      if (months[i] === month) {
        monthConvertedToNumber = monthInNumberForm[i];
      }
    }
    let dateInNumberForm = parseInt(year + monthConvertedToNumber + day, 10);
    return dateInNumberForm;
  };

  status = invoice => {
    const theme = createMuiTheme({
      overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: "1.5em"
          }
        }
      }
    });
    if (Number(invoice.amountPaid) >= Number(invoice.total)) {
      return (
        console.log(this.props),
        (
          <MuiThemeProvider theme={theme}>
            <Tooltip placement="left" title="Paid">
              <Money style={{ color: "green" }} />
            </Tooltip>
          </MuiThemeProvider>
        )
      );
    } else if (
      this.lateChecker(Date()) >
      this.lateChecker(String(invoice.invoiceDueDate))
    ) {
      return (
        <MuiThemeProvider theme={theme}>
          <Tooltip placement="left" title="Late">
            <Money color="error" />
          </Tooltip>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider theme={theme}>
          <Tooltip placement="left" title="Outstanding">
            <Money style={{ color: "yellow" }} />
          </Tooltip>
        </MuiThemeProvider>
      );
    }
  };
  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const themes = createMuiTheme({
          typography: {
          fontSize: 30
        }
      }
    );
    return (
      <UserConsumer>
        {({ userState }) => {
          return (
            <CompanyConsumer>
              {({ companyState }) => {
                const { invoices } = companyState;
                const emptyRows =
                  rowsPerPage -
                  Math.min(rowsPerPage, invoices.length - page * rowsPerPage);
                return (
                  <section>
                    {invoices.length < 1 ? (
                      <Link
                        className="card-links"
                        to={`/user/${userState.userID}/invoice/create`}
                      >
                        <EmptyInvoices />
                      </Link>
                    ) : (
                      <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                          <Table className={classes.table}>
                            <TableBody>
                              <TableRow>
                                <TableCell style={{ fontSize: 25 }}>
                                  #
                                </TableCell>
                                <TableCell style={{ fontSize: 25 }}>
                                  Status
                                </TableCell>
                                <TableCell
                                  style={{ fontSize: 25 }}
                                  align="right"
                                >
                                  Name
                                </TableCell>
                                <TableCell
                                  style={{ fontSize: 25 }}
                                  align="center"
                                >
                                  Due Date
                                </TableCell>
                                <TableCell
                                  style={{ fontSize: 25 }}
                                  align="right"
                                >
                                  Total
                                </TableCell>
                                <TableCell
                                  style={{ fontSize: 25 }}
                                  align="center"
                                >
                                  Edit
                                </TableCell>
                                <TableCell
                                  style={{ fontSize: 25 }}
                                  align="center"
                                >
                                  Pdf
                                </TableCell>
                              </TableRow>

                              {invoices
                                .slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                                )
                                .map(invoice => (
                                  <TableRow key={invoice._id}>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      style={{ fontSize: 20 }}
                                    >
                                      {this.ellipsis(invoice.invoiceNumber)}
                                    </TableCell>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      style={{ fontSize: 20 }}
                                    >
                                      {this.status(invoice)}
                                    </TableCell>

                                    <TableCell
                                      style={{ fontSize: 20 }}
                                      align="right"
                                    >
                                      {invoice.companyName}
                                    </TableCell>

                                    <TableCell
                                      style={{ fontSize: 20 }}
                                      align="right"
                                    >
                                      {this.dueDate(invoice.invoiceDueDate)}
                                    </TableCell>

                                    <TableCell
                                      style={{ fontSize: 20 }}
                                      align="right"
                                    >
                                      ${this.ellipsis(invoice.total)}
                                    </TableCell>

                                    <TableCell
                                      style={{ fontSize: 20 }}
                                      align="right"
                                    >
                                      <IconButton
                                        onClick={() => {
                                          console.log("ok");
                                        }}
                                      >
                                        <Edit />
                                      </IconButton>
                                    </TableCell>
                                    <TableCell align="right">
                                      <IconButton
                                        onClick={() => {
                                          console.log("works");
                                        }}
                                      >
                                        <SaveAlt />
                                      </IconButton>
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
                                  style={{ fontSize: 15 }}
                                  rowsPerPageOptions={[5, 10, 25]}
                                  colSpan={3}
                                  count={invoices.length}
                                  rowsPerPage={rowsPerPage}
                                  page={page}
                                  SelectProps={{
                                    native: true
                                  }}
                                  onChangePage={this.handleChangePage}
                                  onChangeRowsPerPage={
                                    this.handleChangeRowsPerPage
                                  }
                                  ActionsComponent={
                                    TablePaginationActionsWrapped
                                  }
                                />
                                </MuiThemeProvider>
                              </TableRow>
                            </TableFooter>
                          </Table>
                        </div>
                      </Paper>
                    )}
                  </section>
                );
              }}
            </CompanyConsumer>
          );
        }}
      </UserConsumer>
    );
  }
}

export default withStyles(styles)(Invoices);
