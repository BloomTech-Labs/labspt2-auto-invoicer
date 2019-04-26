export default theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: '95%',
    margin: `0 ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  statistics: {
    height: 280
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  block: {
    padding: theme.spacing.unit * 2
  },
  topCards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  invoicesCircle: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#b2ebf2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  usersCircle: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#ffee58',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  middleInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%'
  },
  span: {
    fontWeight: 'bolder',
    fontSize: '2rem',
    marginBottom: 25,
    color: 'black'
  },
  percentageComparison: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '30%'
  },
  percentagePos: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#00897b',
    marginTop: 5
  },
  percentageNeg: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff5722',
    marginTop: 5
  },
  shortcuts: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shortcutsCircle: {
    fontSize: '30px',
    width: 72,
    height: 72,
    borderRadius: '50%',
    backgroundColor: '#ffee58',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    cursor: 'pointer'
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
});
