import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

const styles = theme => ({
  line: {
    width: 200,
    [`@media (max-width: 600px)`]: {
      width: 400
    }
  }
});

const DateSelecter = props => {
  const { classes, onChangeHandler, value, label } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <DatePicker
          margin="normal"
          label={label}
          InputLabelProps={{ style: { fontSize: 15 } }}
          InputProps={{ style: { fontSize: 20 } }}
          value={value}
          onChange={onChangeHandler}
          className={classes.line}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DateSelecter);
