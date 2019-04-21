import { fade } from "@material-ui/core/styles/colorManipulator";
export default theme => ({
  root: {
    width: "99%",
    marginTop: theme.spacing.unit * 3
  },
  rootbar: {
    width: "100%"
  },
  table: {
    minWidth: 1000,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      minWidth:0,
    }
  },
  tableWrapper: {
    overflowX: "auto"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    fontSize: 28,
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: 45
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 20,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 120,
      width: "40%"
    }
  },
  searchIcon: {
    paddingLeft: 5,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 30,
    transition: theme.transitions.create("width"),
    width: 60,
    "&:focus": {
      width: 165
    },
    [theme.breakpoints.up("sm")]: {
      width: 300,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    }
  },
});
