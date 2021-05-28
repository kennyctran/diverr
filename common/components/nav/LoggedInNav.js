import { signOut } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.lightBlue.main,
  },
}));

export default function LoggedInNav({ classes }) {
  const classes2 = useStyles();
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
      data-testid="menu"
    >
      <Button
        startIcon={
          <OpacityOutlinedIcon
            className={classes.icon}
            className={classes2.text}
          />
        }
        href="/feed"
      >
        <Typography
          className={classes.menuItem}
          data-testid="feed"
          className={classes2.text}
        >
          Feed
        </Typography>
      </Button>
      <Button
        startIcon={
          <DescriptionOutlinedIcon
            className={classes.icon}
            className={classes2.text}
          />
        }
        href="/dashboard"
      >
        <Typography
          className={classes.menuItem}
          data-testid="logs"
          className={classes2.text}
        >
          View Logs
        </Typography>
      </Button>
      <Button
        startIcon={
          <AddSharpIcon className={classes.icon} className={classes2.text} />
        }
        href="/form"
      >
        <Typography
          className={classes.menuItem}
          data-testid="form"
          className={classes2.text}
        >
          Create Log
        </Typography>
      </Button>
      <Button
        startIcon={
          <ExitToAppOutlinedIcon
            className={classes.icon}
            className={classes2.text}
          />
        }
        onClick={signOut}
      >
        <Typography
          className={classes.menuItem}
          data-testid="signOut"
          className={classes2.text}
        >
          SIGN OUT
        </Typography>
      </Button>
    </Breadcrumbs>
  );
}
