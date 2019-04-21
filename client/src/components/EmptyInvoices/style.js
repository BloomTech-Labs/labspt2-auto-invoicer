export default theme => ({
  root: {
    width: "99%",
    height: "1500",
    marginTop: theme.spacing.unit * 3
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  table: {
    minWidth: 1000
  },
  tableWrapper: {
    overflowX: "auto"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    fontSize: 30,
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: 45
    }
  }
});
