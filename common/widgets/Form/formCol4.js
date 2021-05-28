import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import AddButton from "common/components/buttons/AddButton.js";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  // col: {
  //   flexDirection: "column",
  // },
  // checkboxArea: {
  //   display: "inline-flex",
  //   flexDirection: "row",
  //   margin: 50,
  // },
  // textfield: {
  //   margin: 5,
  // },
  expAndCondit: {
    padding: 30,
  },
  environment: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    color: "#E9F7F9",
  },
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
}));

export default function ColumnFour({ formik }) {
  const classes = useStyles();

  return (
    // <div className={classes.checkboxArea}>
    <>
      <Grid
        className={classes.expAndCondit}
        container
        item
        xs={6}
        direction="column"
      >
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h6">
            Exposure Protection
          </Typography>
          <hr />
        </Grid>
        <FormControl>
          <FormLabel className={classes.title} component="legend">
            Thermal Insulation
          </FormLabel>
          <RadioGroup onChange={formik.handleChange} name="suitUp">
            <FormControlLabel
              value="wetsuit"
              control={<Radio className={classes.text} color="primary" />}
              label="Wet Suit"
            />
            <FormControlLabel
              value="drysuit"
              control={<Radio className={classes.text} color="primary" />}
              label="Dry Suit"
            />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="hood"
                className={classes.text}
                color="primary"
              />
            }
            label="Hood"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="gloves"
                className={classes.text}
                color="primary"
              />
            }
            label="Gloves"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="boots"
                className={classes.text}
                color="primary"
              />
            }
            label="Boots"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6} className={classes.expAndCondit}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h6">
            Conditions
          </Typography>
          <hr />
        </Grid>
        <Grid container direction="row">
          <Grid item xs={6} container direction="column">
            <FormControl>
              <FormLabel className={classes.title} component="legend">
                Environment
              </FormLabel>
              <RadioGroup
                onChange={formik.handleChange}
                className={classes.environment}
                name="environment"
              >
                <FormControlLabel
                  value="boat"
                  control={<Radio className={classes.text} color="primary" />}
                  label="Boat"
                />
                <FormControlLabel
                  value="shore"
                  control={<Radio className={classes.text} color="primary" />}
                  label="Shore"
                />
                <FormControlLabel
                  value="controlled"
                  control={<Radio className={classes.text} color="primary" />}
                  label="Controlled"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} container direction="column">
            <FormControl>
              <FormLabel className={classes.title} component="legend">
                Water
              </FormLabel>
              <RadioGroup onChange={formik.handleChange} name="water">
                <FormControlLabel
                  value="fresh"
                  control={<Radio className={classes.text} color="primary" />}
                  label="Fresh"
                />
                <FormControlLabel
                  value="salt"
                  control={<Radio className={classes.text} color="primary" />}
                  label="Salt"
                />
              </RadioGroup>
            </FormControl>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    name="checked"
                    value="waves"
                    className={classes.text}
                    color="primary"
                  />
                }
                label="Waves"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    name="checked"
                    value="current"
                    className={classes.text}
                    color="primary"
                  />
                }
                label="Current"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
