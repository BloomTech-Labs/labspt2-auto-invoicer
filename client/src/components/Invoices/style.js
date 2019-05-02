import { fade } from "@material-ui/core/styles/colorManipulator";
export default theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  rootbar: {
    width: "100%"
  },
  table: {
    minWidth: 1000,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      minWidth: 0
    }
  },
  shortcutsCircle: {
    fontSize: "30px",
    width: 72,
    height: 72,
    borderRadius: "50%",
    backgroundColor: "#eff7f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    cursor: "pointer"
  },
  shortcuts: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableWrapper: {
    overflowX: "auto"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: 45,
      marginLeft:16,
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 20,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 200,
      width: "40%"
    }
  },
  button: {
    [theme.breakpoints.up("sm")]: {
      marginRight: 72
    }
  },
  tooltip: {
    backgroundColor: "#eff7f2",
    color: "#4fc878",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontWeight: "bolder",
    border: "1px solid #4fc878"
  },
  tooltipNumber: {
    backgroundColor: "#eff7f2",
    color: "#4fc878",
    boxShadow: theme.shadows[1],
    fontWeight: "bolder",
    border: "1px solid #4fc878",
    fontSize: 16
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
    color: "black",
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
      paddingLeft: theme.spacing.unit * 10
    }
  }
});
