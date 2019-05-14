export default theme => ({
  mainNavContainer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`
  },

  appBar: {
    backgroundColor: `white`,
    width: `100%`,
    alignItems: `center`
  },

  accountBarContainer: {
    backgroundColor: `#8bc34a`,
    width: `100%`,
    padding: `0 2.5%`,
    display: `flex`,
    justifyContent: `space-between`
  },

  navLinksContainer: {
    backgroundColor: `#2d2f31`,
    width: `100%`,
    padding: `0 2.5%`,
    display: `flex`,
    justifyContent: `space-around`,
    alignItems: `stretch`
  },

  icon: {},

  accountMenu: {
    display: `flex`,
    color: `#ffffff`
  },

  selectCompany: {
    color: `#ffffff`,
    margin: `0 20px`
  }
});
