import { Typography, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tags from "common/components/dashboard/Tags.js";

const useStyles = makeStyles((theme) => ({
  root: {},
  itemOne: {
    padding: "8px",
    minHeight: "25%",
    backgroundColor: theme.palette.lightBlue.main,
  },
  itemTwo: {
    padding: "8px",
    minHeight: "25%",
    backgroundColor: theme.palette.lightBlue.main,
  },
  itemThree: {
    padding: "8px",
    minHeight: "30%",
    backgroundColor: theme.palette.lightBlue.main,
  },
  spacer: {
    height: "10px",
  },
  detail: {
    color: theme.palette.gray.main,
  },
}));

export default function logDisplayColumn1({ log }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.itemOne}>
        <Typography
          variant="body1"
          className={classes.detail}
          data-testid="date"
        >
          <Typography variant="h6" data-testid="notes" color="primary">
            Basic Dive Data:
          </Typography>
          <Typography display="inline" color="primary" variant="body1">
            Date:
          </Typography>
          {" " + new Date(log.date).toDateString()}{" "}
          <Typography display="inline" color="primary" variant="body1">
            Dive Number:
          </Typography>{" "}
          {"" + log.id}
        </Typography>
        <Typography variant="body1" data-testid="location">
          {log.dive_site}, {log.city}, {log.country} {"\n"}
        </Typography>
        <Typography variant="body1" data-testid="instructor">
          {log.dive_center}, {log.dive_instructor}, {log.instructor_cert}
        </Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.itemTwo}>
        <Box className={classes.detail} data-testid="rnt">
          <Typography variant="h6" data-testid="notes" color="primary">
            Dive Time Metrics:{" "}
          </Typography>
          <Typography display="inline" color="primary" variant="body1">
            RNT:{" "}
          </Typography>{" "}
          {log.rnt}
        </Box>
        <Box className={classes.detail}>
          {" "}
          <Typography display="inline" color="primary" variant="body1">
            ABT:{" "}
          </Typography>{" "}
          {log.abt}
        </Box>
        <Box className={classes.detail} data-testid="tbt">
          {" "}
          <Typography display="inline" color="primary" variant="body1">
            TBT:{" "}
          </Typography>{" "}
          {log.tbt}
        </Box>
        <Typography
          variant="body1"
          className={classes.detail}
          data-testid="cumulative"
        >
          {" "}
          <Typography display="inline" color="primary" variant="body1">
            Cumulative Time:
          </Typography>{" "}
          {log.cumulative_time} minutes
        </Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.itemThree}>
        <Typography variant="h6" data-testid="notes" color="primary">
          Notes:{" "}
        </Typography>
        <Typography
          variant="body1"
          className={classes.detail}
          data-testid="notes-text"
        >
          {log.notes}
          {log.tags && <Tags log={log} />}
        </Typography>
      </Card>
    </>
  );
}
