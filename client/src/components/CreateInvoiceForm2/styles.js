export default theme => ({
  container: {
    //main container
    // dislay: "flex",
    // flexDirection: "column"
  },
  grid: {
    //date picker grid
    width: "60%"
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing.unit,
    padding: theme.spacing.unit
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit
    //width: "20%",
    //fontSize: "1.5rem"
    // [theme.breakpoints.down("xs")]: {
    //   //equivalent to max-width: 600px
    //   backgroundColor: theme.palette.primary.main
    // }
  }
});
