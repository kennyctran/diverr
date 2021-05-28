import React, { useState } from "react";
import { Chip, Box, Grid, Card, Typography } from "@material-ui/core";
import Tags from "common/components/dashboard/Tags";
import Carousel from "common/components/dashboard/Carousel";
import LogDisplayColumn1 from "common/components/dashboard/LogDisplayColumnOne";
import LogDisplayColumn2 from "common/components/dashboard/LogDisplayColumnTwo";
import { makeStyles } from "@material-ui/core/styles";
import NewCarousel from "common/components/dashboard/NewCarousel.js";

const useStyles = makeStyles((theme) => ({
  widthSpacer: {
    width: "5px",
  },
  heightSpacer: {
    height: "15px",
  },
  title: {
    color: theme.palette.lightBlue.main,
  },
}));

export default function LogDisplay({ log }) {
  const [currentPhotos, changeCurrentPhotos] = useState(4);
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid container direction="column" item xs={7}>
          <LogDisplayColumn1 log={log} />
        </Grid>
        <Grid item xs={1} />
        <Grid container direction="column" item xs={4}>
          <LogDisplayColumn2 log={log} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>
            Photos:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <NewCarousel tileData={log.photos} />
        </Grid>
      </Grid>
    </>
  );
}
