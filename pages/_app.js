import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "next-auth/client";
import Overlay from "styles/Overlay";

const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "100vh",
    overflowX: "hidden",
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <main className={classes.root}>
      <ThemeWrapper>
        <Provider session={pageProps.session}>
          <Overlay>
            <Component {...pageProps} />
          </Overlay>
        </Provider>
      </ThemeWrapper>
    </main>
  );
}

export default MyApp;
