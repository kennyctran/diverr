import { useSession } from "next-auth/client";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LoggedOutNav from "common/components/nav/LoggedOutNav";
import LoggedInNav from "common/components/nav/LoggedInNav";
import Title from "common/components/nav/Title";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundImage: `linear-gradient(to bottom, #046499, rgba(0,0,20,0.3))`,
    minHeight: "90px",
  },
  menuItem: {
    margin: "auto",
    cursor: "pointer",
    fontWeight: 400,
  },
  menu: {
    display: "inline-block",
  },
}));

export default function Header() {
  const [session, loading] = useSession();
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.root}
      position={"sticky"}
    >
      <Title classes={classes} />
      {session && !loading && <LoggedInNav classes={classes} />}
      {loading && <CircularProgress />}
      {!session && !loading && <LoggedOutNav classes={classes} />}
    </Grid>
  );
}
