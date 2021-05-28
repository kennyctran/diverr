import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: "25",
    position: "relative",
  },
  login: {
    minHeight: "400px",
    minWidth: "200px",
    height: "35%",
    width: "25%",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "15px",
    boxShadow: `0px 0px 5px 2px ${theme.palette.primary.main}`,
  },
  spacer: {
    height: "15px",
  },
  title: {
    color: theme.palette.secondary.light,
  },
  message: {
    color: theme.palette.lightBlue.main,
  },
}));

export default function LoginBox({ provider, signIn }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.login}
      >
        <Typography
          variant="h6"
          data-testId="message"
          className={classes.message}
        >
          Sign into <span className={classes.title}>Diverr</span>
        </Typography>
        <Box className={classes.spacer} />
        <Button
          variant="outlined"
          onClick={() => signIn(provider.id)}
          data-testId="google"
        >
          with Google
        </Button>
      </Grid>
    </Grid>
  );
}

LoginBox.propTypes = {
  provider: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
};
