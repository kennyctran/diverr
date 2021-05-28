import NoUserDashboardLayout from "common/layouts/NoUserDashboardLayout";
import UserDashboardLayout from "common/layouts/UserDashboardLayout";
import LoadingDashboardLayout from "common/layouts/LoadingDashboardLayout";
import Header from "common/widgets/Header";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
  },
});

export default function Dashboard({ selection, email }) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {selection === "user" && <UserDashboardLayout email={email} />}
        {selection === "noUser" && <NoUserDashboardLayout />}
        {selection === "loading" && <LoadingDashboardLayout />}
      </Grid>
    </>
  );
}
