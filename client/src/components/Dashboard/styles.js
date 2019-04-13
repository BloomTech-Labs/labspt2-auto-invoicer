export default theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '90%',
    height: 250,
    marginBottom: 50,
    borderRadius: 0,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }
});
