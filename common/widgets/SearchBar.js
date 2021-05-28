/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: 300,
    "& .MuiFormLabel-root": {
      color: theme.palette.lightBlue.main,
      fontWeight: 900,
    },
    "& .MuiIconButton-root": {
      color: theme.palette.lightBlue.main,
    },
  },
  textfill: {
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },

    "& .MuiInputBase-root": {
      color: theme.palette.lightBlue.main,
      fontWeight: "bold",
    },
  },
}));

export default function SearchBar({ tags, onSelect, search }) {
  const classes = useStyles();
  return (
    <Autocomplete
      value={search}
      onChange={(event, value) => onSelect(value)}
      className={classes.root}
      id="search box"
      options={tags}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search the tag you like"
          variant="filled"
          className={classes.textfill}
        />
      )}
    />
  );
}
