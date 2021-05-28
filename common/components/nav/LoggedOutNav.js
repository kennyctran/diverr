import { signIn } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.lightBlue.main,
  },
}));

export default function LoggedOutNav({ classes }) {
  const classes2 = useStyles();
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
      data-testid="menu"
    >
      <Button
        startIcon={<AssignmentIndOutlinedIcon className={classes2.text} />}
        onClick={signIn}
      >
        <Typography
          className={classes.menuItem}
          data-testid="signIn"
          className={classes2.text}
        >
          SIGN IN
        </Typography>
      </Button>
    </Breadcrumbs>
  );
}
