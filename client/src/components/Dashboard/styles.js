export default theme => ({
  root: {
    alignSelf: 'center',
    marginTop: 20,
    flexGrow: 1,
    widht: '80%'
    // padding: 50
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 280,
    height: 280,
    margin: 0,
    marginBottom: 50,
    borderRadius: 0
    // boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  chart: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '90%',
    height: 280,
    marginBottom: 50,
    borderRadius: 0
    // boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  image: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: '90%',
    marginBottom: 40,
    borderRadius: 0
  }
});
