export default theme => ({
  settingsContainer : {
    width: `100%`,
    display: `flex`,
    padding: theme.spacing.unit * 2,
    flexDirection: `column`,
    justifyContent: `space-around`,
    alignItems: `center`,
  },

  cardContainer: {
    maxWidth: `960px`,
    width: `100%`,
    marginBottom: `20px` 
  },

  cards : {
    textAlign: 'start',
    color: theme.palette.text.secondary,
    width: '100%',
    height: `100%`,
    padding: `20px`,
    borderRadius: 0,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`
  },

  companyDropDown : {
    width: `50%`,
    marginBottom: `20px`,
    fontSize: `2rem`
  }
})