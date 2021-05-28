import { Box, Grid, Card, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import UserInfo from "common/components/dashboard/UserInfo.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    height: 80,
    display: "flex",
  },
}));

export default function Tags({ name, logs }) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <UserInfo name={name} logs={logs} />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Typography variant="h3">YOU HAVE NO LOGS!</Typography>
          <Link href="/form">
            <Button>CLICK HERE TO START LOGGING</Button>
          </Link>
        </Card>
      </Grid>
    </Grid>
  );
}
