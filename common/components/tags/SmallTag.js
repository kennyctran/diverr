import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.lightBlue.main,
    borderColor: theme.palette.primary.main,
    "& .MuiChip-label": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },
}));

export default function SmallTag({ tagName, handleClick }) {
  const classes = useStyles();
  return (
    <>
      {handleClick ? (
        <Chip
          label={tagName}
          size="small"
          className={classes.chip}
          clickable
          onClick={() => handleClick(tagName)}
          variant="outlined"
        />
      ) : (
        <Chip
          label={tagName}
          size="small"
          className={classes.chip}
          variant="outlined"
        />
      )}
    </>
  );
}
