export default theme => ({
  container : {
    margin: `0 auto`
  },

  cards : {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '75%',
    borderRadius: 0,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },

  companyDropDown : {
    width: `75%`,
    marginBottom: `20px`,
    fontSize: `2rem`
  }
})