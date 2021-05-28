import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.lightBlue.main,
  },
}));

export default function FormSmallTag({ tags, setTags, chip }) {
  const classes = useStyles();

  const handleDelete = (e) => {
    let index = tags.indexOf(chip);
    let copy = tags.slice();
    copy.splice(index, 1);
    setTags(copy);
  };

  return (
    <Chip
      onClick={handleDelete}
      icon={<HighlightOffIcon />}
      label={chip}
      size="small"
      className={classes.chip}
    />
  );
}
