import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, FormRow } from "@material-ui/core";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  col: {
    paddingRight: 50,
    paddingTop: 50,
  },
  textfield: {
    margin: 5,
    "& input + fieldset": {
      borderColor: "#E9F7F9",
      borderWidth: 1,
    },
  },
  input: {
    color: "#E9F7F9",
  },
  values: {
    color: "#E9F7F9",
  },
}));

export default function ColumnTwo({ formik }) {
  const classes = useStyles();

  return (
    <div className={classes.col}>
      <TextField
        className={classes.textfield}
        required
        type="time"
        label="Time In"
        name="timeIn"
        value={formik.values.timeIn}
        onChange={formik.handleChange}
        InputLabelProps={{
          shrink: true,
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        variant="outlined"
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        required
        type="time"
        label="Time Out"
        name="timeOut"
        value={formik.values.timeOut}
        onChange={formik.handleChange}
        InputLabelProps={{
          shrink: true,
          className: classes.input,
        }}
        InputProps={{
          className: classes.values,
        }}
        variant="outlined"
        fullWidth={true}
      />
      <TextField
        className={classes.textfield}
        required
        label="Start air pressure"
        name="startPressure"
        value={formik.values.startPressure}
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
        label="End air pressure"
        name="endPressure"
        value={formik.values.endPressure}
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
        label="Maximum Depth"
        name="depth"
        value={formik.values.depth}
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
        label="Actual Bottom Time"
        name="abt"
        value={formik.values.abt}
        onChange={formik.handleChange}
        variant="outlined"
        helperText="In minutes"
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
        label="Residual Nitrogen Time"
        name="rnt"
        value={formik.values.rnt}
        onChange={formik.handleChange}
        variant="outlined"
        helperText="In minutes"
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
        label="Total Bottom Time"
        name="tbt"
        value={formik.values.tbt}
        onChange={formik.handleChange}
        variant="outlined"
        helperText="In minutes"
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
