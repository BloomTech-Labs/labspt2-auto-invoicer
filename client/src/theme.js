import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#caf986',
      main: '#8bc34a',
      dark: '#689f38'
    },
    secondary: {
      main: '#212121'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    htmlFontSize: 16,
    fontFamily: [
      'Roboto',
      '-apple-system',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"'
    ].join(',')
  },
  spacing: {
    unit: 8
  }
  // overrides: {
  //   MuiButton: {
  //     text: {
  //       background: '#F5A623',
  //       borderRadius: 20,
  //       border: 0,
  //       padding: '3px 40px'
  //     }
  //   }
  // }
});
