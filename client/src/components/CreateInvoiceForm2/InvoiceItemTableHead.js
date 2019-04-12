import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const InvoiceItemTableHead = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 14 }} align="left">
              Item
            </TableCell>
            <TableCell style={{ fontSize: 14 }} align="left">
              Quantity
            </TableCell>
            <TableCell style={{ fontSize: 14 }} align="left">
              Rate
            </TableCell>
            <TableCell style={{ fontSize: 14 }} align="left">
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(InvoiceItemTableHead);
