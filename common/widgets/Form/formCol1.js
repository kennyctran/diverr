import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  col: {
    flexDirection: "column",
    margin: 50,
  },
  textfield: {
    margin: 5,
    "& input + fieldset": {
      borderColor: "#E9F7F9",
      borderWidth: 1,
    },
  },
  title: {
    marginBottom: 10,
    color: "#E9F7F9",
  },
  input: {
    color: "#E9F7F9",
  },
  values: {
    color: "#E9F7F9",
  },
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
}));

export default function ColumnOne({ formik }) {
  const classes = useStyles();

  return (
    <div className={classes.col}>
      <FormControl>
        <FormLabel className={classes.title} component="legend">
          Privacy
        </FormLabel>
        <RadioGroup onChange={formik.handleChange} name="privacy">
          <FormControlLabel
            value="private"
            control={<Radio className={classes.text} color="primary" />}
            label="Private"
          />
          <FormControlLabel
            value="public"
            control={<Radio className={classes.text} color="primary" />}
            label="Public"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        className={classes.textfield}
        required
        type="date"
        label="Date"
        name="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        style={{ color: "#E9F7F9" }}
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        required
        label="City"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        required
        label="Country"
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        variant="outlined"
        style={{
          color: "#E9F7F9 !important",
        }}
        InputLabelProps={{
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        required
        label="Dive Site"
        name="site"
        value={formik.values.site}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        required
        label="Dive Center"
        name="center"
        value={formik.values.center}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        label="Dive Instructor/Guide"
        name="instructor"
        value={formik.values.instructor}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        InputProps={{
          className: classes.values,
        }}
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        label="Instructor/Guide Cert No."
        name="instructorCert"
        value={formik.values.instructorCert}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        fullWidth={true}
      />
    </div>
  );
}
