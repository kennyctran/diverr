import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  tinySpacer: {
    height: "15px",
  },
  text: {
    color: theme.palette.primary.light,
    fontWeight: "700",
  },
  buttonContainer: {
    height: "10%",
    width: "100%",
  },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h5"
        style={{ textAlign: "center", fontWeight: "700" }}
        color="primary"
      >
        What is diverr?
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ textAlign: "center" }}
        color="primary"
      >
        A site by divers, for divers
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowRightSharpIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.text}>
                Store and view your dive logs
              </Typography>
            }
          />
        </ListItem>
        <Box className={classes.tinySpacer} />
        <ListItem>
          <ListItemIcon>
            <ArrowRightSharpIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.text}>
                See photos of dives that others have taken
              </Typography>
            }
          />
        </ListItem>
        <Box className={classes.tinySpacer} />
        <ListItem>
          <ListItemIcon>
            <ArrowRightSharpIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.text}>
                Upload and share your own dive photos
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/signin"
          >
            Join Today!
          </Button>
        </Box>
      </Grid>
    </>
  );
}
