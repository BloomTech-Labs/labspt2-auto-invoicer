import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const InvoiceSummary = props => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Summary Invoice Card Placeholder
        </Typography>
        <Typography variant="h5" component="h2">
          Sample Invoice Card
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          Invoice Content
          <br />
          Invoice Details
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Generate</Button>
      </CardActions>
    </Card>
  );
};

InvoiceSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvoiceSummary);
