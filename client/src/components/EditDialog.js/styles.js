export default theme => ({
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
  tooltip: {
    backgroundColor: "#eff7f2",
    color: "#4fc878",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontWeight: "bolder",
    border: "1px solid #4fc878"
  }
});
