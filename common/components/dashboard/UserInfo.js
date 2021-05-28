import { Typography, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  col1Item: {
    backgroundColor: theme.palette.lightBlue.main,
    padding: "10px",
  },
}));
export default function logDisplayColumn1({ name, logs }) {
  const classes = useStyles();
  console.log(name);
  return (
    <Card className={classes.col1Item}>
      <Typography variant="h5" color="primary">
        {`Hello, ${name}`}
      </Typography>
      <Box>
        <Typography variant="h6" color="primary" display="inline">
          You've been on{" "}
        </Typography>
        <Typography display="inline" color="secondary" variant="h6">
          {logs.length} dives!
        </Typography>
      </Box>
      <Typography variant="h6" color="secondary">
        <Typography variant="h6" color="primary" display="inline">
          Total Cumulative Dive Time:{" "}
        </Typography>
        {logs.length ? logs[logs.length - 1].cumulative_time : "0"} Minutes
      </Typography>
    </Card>
  );
}
