import React, { useState } from "react";
import splitArrayRows from "common/utils/splitArray.js";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: 150,
    height: 150,
  },
  image: {
    minHeight: 150,
    minWidth: 150,
    maxHeight: 150,
    maxWidth: 150,
  },
}));

export default function Carousel({ log, currentPhotos, changeCurrentPhotos }) {
  const styles = useStyles();
  const renderLeft = () => {
    if (currentPhotos > 4) {
      return (
        <Grid item xs={2}>
          <ArrowBackIosIcon
            onClick={() => {
              changeCurrentPhotos((prev) => prev - 1);
            }}
          />
        </Grid>
      );
    }
    return null;
  };
  const renderRight = () => {
    if (currentPhotos < log.photos.length) {
      return (
        <Grid item xs={2}>
          <ArrowForwardIosIcon
            onClick={() => {
              changeCurrentPhotos((prev) => prev + 1);
            }}
          />
        </Grid>
      );
    }
    return null;
  };
  if (log.photos.length <= 4) {
    return (
      <Grid container spacing={4}>
        {log.photos.map((photo, i) => {
          return (
            <Grid
              key={i}
              className={styles.imageContainer}
              item
              xs={12 / log.photos.length}
            >
              <img className={styles.image} src={photo.url} />
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={4}>
        {renderLeft()}
        {log.photos.slice(currentPhotos - 4, currentPhotos).map((photo, i) => {
          return (
            <Grid key={i} className={styles.imageContainer} item xs={2}>
              <img className={styles.image} src={photo.url} />
            </Grid>
          );
        })}
        {renderRight()}
      </Grid>
    );
  }
}
