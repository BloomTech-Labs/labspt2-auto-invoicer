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
  shortcutsCircle: {
    fontSize: '30px',
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#a8e4bc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    cursor: 'pointer'
  },
  shortcuts: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
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
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 20,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 120,
      width: "40%"
    }
  },
    tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 13
  },
  tooltipNumber:{
        backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15
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
    paddingLeft: theme.spacing.unit * 10,
    }
  },
});
