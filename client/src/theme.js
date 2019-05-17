import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#8bc34a",
      dark: "#689f38",
      contrastText: "#000"
    },
    secondary: {
      main: "#212121"
    }
  },
  typography: {
    h1: {
      //htmlFontSize: 40
      fontSize: 16,
      fontWeight: "bold",
      color: "white"
    },
    h2: {
      htmlFontSize: 20
    },
    h3: {
      //htmlFontSize: 20,
      fontSize: "4rem",
      color: "blue"
    },
    h4: {},
    h5: {},
    h6: {},
    button: {},
    caption: {
      fontSize: 12,
      color: "black"
    },
    overline: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white"
    }
  }
});
