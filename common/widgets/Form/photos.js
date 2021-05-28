import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: 5,
    marginTop: 50,
    "& input + fieldset": {
      borderColor: "#E9F7F9",
      borderWidth: 1,
    },
  },
  button: {
    height: 56,
    margin: 5,
    marginTop: 50,
  },
  img: {
    maxWidth: 200,
    maxHeight: 200,
    objectFit: "contain",
  },
  gridlist: {
    flexWrap: "no-wrap",
  },
  input: {
    color: "#E9F7F9",
  },
  values: {
    color: "#E9F7F9",
  },
}));

export default function FormMedia({ images, setImages }) {
  const classes = useStyles();

  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    let copy = images.slice();
    copy.push(image);
    setImages(copy);
    setImage("");
  };

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={2} style={{ padding: 15 }}>
        <TextField
          onChange={handleChange}
          label="Add Media"
          name="images"
          variant="outlined"
          value={image}
          className={classes.textfield}
          InputLabelProps={{
            className: classes.input,
          }}
          InputProps={{
            className: classes.values,
          }}
        />
      </Grid>
      <Grid item xs={2} style={{ padding: 15 }}>
        <Button
          onClick={handleSubmit}
          className={classes.button}
          color="primary"
          variant="contained"
          fullWidth
        >
          Add a Photo/Video
        </Button>
      </Grid>
      <Grid item xs={8}>
        <GridList className={classes.gridlist} cellHeight={160} cols={4}>
          {images.map((media) => (
            <GridListTile key={media}>
              <img className={classes.img} src={media} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
}
