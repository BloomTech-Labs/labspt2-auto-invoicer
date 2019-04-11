import React from "react";
//import styles from "./styles";

import Button from "@material-ui/core/Button";

const UploadLogo = props => {
  const { classes } = props;
  return (
    <div>
      <input
        accept="image/*"
        //className={classes.input}
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        {/* <Button variant="raised" component="span" className={classes.button}> */}
        <Button variant="raised" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default UploadLogo;
