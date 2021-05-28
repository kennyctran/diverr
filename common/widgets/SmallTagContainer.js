import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import SmallTag from "common/components//tags/SmallTag.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
}));

export default function SmallTagContainer({ tags, handleClick }) {
  const classes = useStyles();
  return (
    tags && (
      <Paper elevation={3} component="ul" className={classes.paper}>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <SmallTag tagName={tag} handleClick={handleClick} />
            </li>
          );
        })}
      </Paper>
    )
  );
}
