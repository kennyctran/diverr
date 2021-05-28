import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Typography, Paper, MobileStepper } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
  },
  textright: {
    borderTop: "2px solid",
    borderBottom: "2px solid",
    borderRight: "2px solid",
    borderTopColor: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.main,
    borderRightColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontWeight: "bold",
    borderRadius: "0 25px 25px 0",
  },
  textleft: {
    borderTop: "2px solid",
    borderBottom: "2px solid",
    borderLeft: "2px solid",
    borderTopColor: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.main,
    borderLeftColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontWeight: "bold",
    borderRadius: "25px 0 0 25px",
  },
  imgFooter: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    borderRadius: "0 0 10px 10px",
    borderBottom: "2px solid",
    borderLeft: "2px solid",
    borderRight: "2px solid",
    borderBottomColor: theme.palette.primary.main,
    borderLeftColor: theme.palette.primary.main,
    borderRightColor: theme.palette.primary.main,
  },
  img: {
    maxHeight: 450,
    overflow: "hidden",
    display: "block",
    width: "100%",
    objectFit: "cover",
  },
}));

export default function PostImages({ photos }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = photos.length;
  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(maxSteps - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={photos[activeStep].url}
        alt={photos[activeStep].id}
      />
      <MobileStepper
        className={classes.imgFooter}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.textright}
            size="small"
            onClick={handleNext}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            className={classes.textleft}
            size="small"
            onClick={handleBack}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
