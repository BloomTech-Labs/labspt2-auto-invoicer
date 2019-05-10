import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Tooltip
} from "@material-ui/core";
import styles from "./styles";
import "./Delete.css";

const Delete = props => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const hiddenToggle = () => {};

  const { classes } = props;

  return (
    <Fragment>
      <Tooltip
        title="Delete"
        classes={{
          tooltip: classes.tooltip
        }}
      >
        <div className={classes.shortcutsCircle} onClick={handleToggle}>
          <i
            className="material-icons"
            style={{
              color: "#4fc878",
              fontSize: 36
            }}
          >
            delete_forever
          </i>
        </div>
      </Tooltip>
      <Dialog open={open} onClose={handleToggle}>
        <DialogTitle className={classes.dialogTitle}>
          <p> Delete Invoice ? </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogText}>
            Are you sure you wish to delete ?
            <br />
            <div className="buttons">
              <Button
                // onClick={hiddenToggle}
                className={classes.buttons}
                variant="contained"
                style={{
                  backgroundColor: "#4fc878"
                }}
              >
                Delete
              </Button>
              <Button
                onClick={handleToggle}
                className={classes.buttons}
                variant="contained"
                style={{ background: "#ff8080" }}
              >
                Cancel
              </Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
export default withStyles(styles)(Delete);
