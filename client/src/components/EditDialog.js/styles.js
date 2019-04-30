export default theme => ({
  shortcutsCircle: {
    fontSize: "30px",
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#eff7f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    cursor: "pointer"
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 13
  }
});
