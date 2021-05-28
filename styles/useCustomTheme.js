import { useMemo } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";
import yellow from "@material-ui/core/colors/yellow";

export default function useCustomTheme() {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createMuiTheme({
        palette: {
          type: "light",
          primary: {
            main: blue[500],
          },
          secondary: {
            main: deepOrange[500],
          },
          lightBlue: {
            main: "#E9F7F9",
          },
          gray: {
            main: "#4E5255",
          },
          warning: {
            main: orange[500],
          },
          error: {
            main: red[500],
          },
          info: {
            main: purple[300],
          },
          success: {
            main: yellow[600],
          },
        },
        typography: {
          fontFamily: ["Rajdhani", "sans-serif"],
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              body: {
                maxHeight: "100vh",
                overflowX: "hidden",
                backgroundColor: "rgb(0, 0, 20)",
              },
              "@font-face": ["Rajdhani"],
            },
          },
        },
      })
    );
  }, []);

  return theme;
}
