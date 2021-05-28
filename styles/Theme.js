import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import useCustomTheme from "styles/useCustomTheme";
import PropTypes from "prop-types";

export default function Theme({ children }) {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
