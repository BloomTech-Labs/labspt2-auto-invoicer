import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

const StyledSection = styled.section`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InvoiceNotesTerms = props => {
  const { classes, onChangeHandler, value } = props;
  return (
    <React.Fragment>
      <StyledSection>
        <TextField
          id="standard-multiline-flexible"
          label="Notes"
          multiline
          rowsMax="5"
          value={value}
          onChange={onChangeHandler}
          className={classes.textField}
          InputProps={{ style: { fontSize: 14 } }}
          margin="normal"
        />

        <TextField
          id="standard-multiline-flexible"
          label="Terms"
          multiline
          rowsMax="5"
          value={value}
          onChange={onChangeHandler}
          className={classes.textField}
          InputProps={{ style: { fontSize: 14 } }}
          margin="normal"
        />
      </StyledSection>
    </React.Fragment>
  );
};

export default withStyles(styles)(InvoiceNotesTerms);
