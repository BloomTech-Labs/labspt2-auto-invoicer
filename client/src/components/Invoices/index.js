import React, { Component } from "react";
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
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Edit from "@material-ui/icons/EditOutlined";
import Money from "@material-ui/icons/AttachMoney";
import Tooltip from "@material-ui/core/Tooltip";
// import components here

import EmptyInvoices from "../EmptyInvoices";
import { Link } from "react-router-dom";
import styles from "./style";

// Import Data Here

import { CompanyConsumer } from "../../contexts/CompanyContext";
import { UserConsumer } from "../../contexts/UserContext";

// import css here

import "./Invoices.css";

class Invoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      search: "",
      buttonSize: "large"
    };
  }
  componentDidMount() {
    this.rowsPerPage();
    this.buttonSize();
  }
  rowsPerPage = () => {
    window.innerWidth > 500
      ? this.setState({ rowsPerPage: 10 })
      : this.setState({ rowsPerPage: 5 });
  };
  buttonSize = () => {
    window.innerWidth > 500
      ? this.setState({ buttonSize: "large" })
      : this.setState({ buttonSize: "medium" });
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  dueDate = str => {
    return str.slice(4, 16);
  };
  ellipsis = str => {
    let shortened = str.length >= 5 ? str.slice(0, 5) + "..." : str;
    return shortened;
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
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
  toolTipSize = (component, placement, str) => {
    const theme = createMuiTheme({
      typography: {
        fontSize: 25,
        useNextVariants: true
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Tooltip placement={placement} title={str}>
          {component}
        </Tooltip>
      </MuiThemeProvider>
    );
  };
  invoiceSearch = invoices => {
    let invoicesToShow =
      this.state.search === ""
        ? invoices
        : invoices.filter(invoice => {
            return invoice.invoiceNumber.includes(this.state.search);
          });
    return invoicesToShow;
  };

  status = invoice => {
    const theme = createMuiTheme({
      typography: {
        fontSize: 25,
        useNextVariants: true
      }
    });
    if (Number(invoice.amountPaid) >= Number(invoice.total)) {
      return (
        <MuiThemeProvider theme={theme}>
          <Tooltip placement="left" title="Paid">
            <Money style={{ color: "green" }} />
          </Tooltip>
        </MuiThemeProvider>
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
    const { rowsPerPage, page, buttonSize } = this.state;
    const themes = createMuiTheme({
      typography: {
        fontSize: 30,
        useNextVariants: true
      }
    });
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
                      <EmptyInvoices userID={userState.userID} />
                    ) : (
                      <Grow in={true} {...{ timeout: 1300 }}>
                        <Paper
                          style={{
                            border: "2px solid #8bc34a",
                            marginBottom: "20px"
                          }}
                          className={classes.root}
                        >
                          <div className={classes.rootbar}>
                            <AppBar
                              position="static"
                              style={{ backgroundColor: "#8bc34a" }}
                            >
                              <Toolbar>
                                <Typography
                                  className={classes.title}
                                  color="inherit"
                                  noWrap
                                >
                                  Invoices
                                </Typography>
                                <div className={classes.search}>
                                  <div className={classes.searchIcon}>
                                    <SearchIcon />
                                  </div>
                                  <InputBase
                                    placeholder="Search…"
                                    name="search"
                                    onChange={this.handleInputChange}
                                    classes={{
                                      root: classes.inputRoot,
                                      input: classes.inputInput
                                    }}
                                  />
                                </div>
                                <div className={classes.grow} />
                                <div>
                                  <Link
                                    to={`/user/${
                                      userState.userID
                                    }/invoice/create`}
                                  >
                                    <Button
                                      variant="contained"
                                      style={{
                                        backgroundColor: "#689f38",
                                        color: "white"
                                      }}
                                      size={buttonSize}
                                    >
                                      Create
                                    </Button>
                                  </Link>
                                </div>
                              </Toolbar>
                            </AppBar>
                          </div>
                          <div className={classes.tableWrapper}>
                            <Table className={classes.table}>
                              <TableBody>
                                <TableRow
                                  style={{
                                    borderBottom: "2px solid #8bc34a"
                                  }}
                                >
                                  <TableCell
                                    style={{ fontSize: 20 }}
                                    align="center"
                                  >
                                    Number
                                  </TableCell>
                                  <TableCell
                                    style={{ fontSize: 20 }}
                                    align="center"
                                  >
                                    Status
                                  </TableCell>
                                  <TableCell
                                    style={{ fontSize: 20 }}
                                    align="center"
                                  >
                                    Name
                                  </TableCell>
                                  <TableCell
                                    style={{ fontSize: 20 }}
                                    align="center"
                                    colSpan={3}
                                  >
                                    Due Date
                                  </TableCell>
                                  <TableCell
                                    style={{ fontSize: 20 }}
                                    align="center"
                                    colSpan={3}
                                  >
                                    Total
                                  </TableCell>
                                  <TableCell
                                    style={{ fontSize: 20 }}
                                    align="center"
                                  >
                                    Actions
                                  </TableCell>
                                </TableRow>
                                {this.invoiceSearch(invoices)
                                  .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                  )
                                  .map(invoice => (
                                    <TableRow
                                      style={{
                                        borderBottom: "2px solid #8bc34a"
                                      }}
                                      key={invoice._id}
                                    >
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                        style={{ fontSize: 18.5 }}
                                      >
                                        {this.ellipsis(invoice.invoiceNumber)}
                                      </TableCell>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                        style={{ fontSize: 18 }}
                                      >
                                        {this.status(invoice)}
                                      </TableCell>
                                      <TableCell
                                        style={{ fontSize: 18 }}
                                        align="center"
                                      >
                                        {invoice.companyName}
                                      </TableCell>
                                      <TableCell
                                        style={{ fontSize: 17 }}
                                        align="center"
                                        colSpan={3}
                                      >
                                        {this.dueDate(invoice.invoiceDueDate)}
                                      </TableCell>
                                      <TableCell
                                        style={{ fontSize: 17 }}
                                        align="center"
                                        colSpan={3}
                                      >
                                        ${this.ellipsis(invoice.total)}
                                      </TableCell>
                                      <TableCell
                                        style={{ fontSize: 18 }}
                                        align="center"
                                      >
                                        <IconButton>
                                          <Link
                                            className="card-links"
                                            to={`/user/${
                                              userState.userID
                                            }/invoice/${invoice._id}/edit`}
                                          >
                                            {this.toolTipSize(
                                              <Edit />,
                                              "left",
                                              "Edit"
                                            )}
                                          </Link>
                                        </IconButton>
                                        <IconButton
                                          onClick={() => {
                                            this.props.createPDF(invoice);
                                          }}
                                        >
                                          {this.toolTipSize(
                                            <SaveAlt />,
                                            "right",
                                            "Download"
                                          )}
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
                                      rowsPerPageOptions={[5, 10, 25]}
                                      backIconButtonProps={{
                                        "aria-label": "Previous Page"
                                      }}
                                      nextIconButtonProps={{
                                        "aria-label": "Next Page"
                                      }}
                                      colSpan={3}
                                      count={
                                        this.invoiceSearch(invoices).length
                                      }
                                      rowsPerPage={rowsPerPage}
                                      page={page}
                                      onChangePage={this.handleChangePage}
                                      onChangeRowsPerPage={
                                        this.handleChangeRowsPerPage
                                      }
                                    />
                                  </MuiThemeProvider>
                                </TableRow>
                              </TableFooter>
                            </Table>
                          </div>
                        </Paper>
                      </Grow>
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
