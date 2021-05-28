import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  // col: {
  //   margin: 50,
  // },
  textfield: {
    margin: 5,
    "& input + fieldset": {
      borderColor: "#E9F7F9",
      borderWidth: 1,
    },
  },
  notes: {
    margin: 5,
    "& input + fieldset": {
      borderColor: "#E9F7F9",
      borderWidth: 1,
      height: 300,
    },
  },
  input: {
    color: "#E9F7F9",
  },
  values: {
    color: "#E9F7F9",
  },
}));

export default function ColumnThree({ formik }) {
  const classes = useStyles();

  return (
    // <div className={classes.col}>
    <>
      <TextField
        className={classes.textfield}
        label="Visibility"
        name="visibility"
        value={formik.values.visibility}
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
        label="Air Temperature"
        name="airTemp"
        value={formik.values.airTemp}
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
        label="Water Temperature"
        name="waterTemp"
        value={formik.values.waterTemp}
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
        label="Weight"
        name="weight"
        value={formik.values.weight}
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
        className={classes.notes}
        // multiline
        rows={14}
        label="Notes"
        name="notes"
        value={formik.values.notes}
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
    </>
  );
}
