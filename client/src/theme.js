import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#8bc34a',
      dark: '#689f38',
      contrastText: '#000'
    },
    secondary: {
      main: '#212121'
    }
  },
  typography: {
    htmlFontSize: 10,
    
    h1: {
      htmlFontSize: 40
    },
  },
});
