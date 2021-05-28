import splitArrayRows from "common/utils/splitArray.js";
import { Box, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: "8px",
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
      <Card className={classes.item}>
        <Typography variant="h6" color="primary">
          Dive Conditions
        </Typography>
        <Box className={classes.detail}>
          {" "}
          <Typography display="inline" color="primary" variant="body1">
            Visibility:
          </Typography>
          {" " + log.visibility}
        </Box>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            Air Temp:
          </Typography>{" "}
          {" " + log.air_temp}
        </Box>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            Water Temp:{" "}
          </Typography>{" "}
          {log.water_temp}
        </Box>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            Conditions:
          </Typography>
          {log.salt_water ? " Salt-Water" : " Fresh-Water"},{" "}
          {log.boat ? "Boat" : "No Boat"},{" "}
          {log.current ? "Current" : "No Current"}
        </Box>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.item}>
        <Typography variant="h6" color="primary">
          Dive Gear
        </Typography>
        <Typography variant="body1" className={classes.detail}>
          {log.wetsuit ? "Wet Suit" : "Dry Suit"}
        </Typography>
        <Typography BoxclassName={classes.detail}>
          {log.hood ? "Hood, " : "No Hood,"}
          {log.gloves ? "Gloves " : "No Gloves"}
        </Typography>
        <Typography variant="body1">{log.weight}</Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.item}>
        <Typography variant="h6" color="primary">
          Dive Metrics
        </Typography>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            Start Pressure:{" "}
          </Typography>{" "}
          {log.start_pressure}
        </Box>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            End Pressure:{" "}
          </Typography>{" "}
          {log.end_pressure}
        </Box>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            Start Time:{" "}
          </Typography>{" "}
          {log.time_in}
        </Box>
        <Box className={classes.detail}>
          <Typography display="inline" color="primary" variant="body1">
            End Time:{" "}
          </Typography>{" "}
          {log.time_out}
        </Box>
      </Card>
    </>
  );
}
