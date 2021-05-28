import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const lg = {
  one: "rgba(0, 0, 20, 0)",
  two: "rgba(0, 0, 20, 0.1)",
  three: "rgba(0, 0, 20, 0.2)",
  four: "rgba(0, 0, 20, 0.3)",
  five: "rgba(0, 0, 20, 0.4)",
  six: "rgba(0, 0, 20, 0.5)",
  seven: "rgba(0, 0, 20, 0.6)",
  eight: "rgba(0, 0, 20, 0.7)",
  nine: "rgba(0, 0, 20, 0.8)",
  ten: "rgba(0, 0, 20, 1)",
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    backgroundImage: `linear-gradient(to bottom, ${lg.one}, ${lg.two}, ${lg.three}, ${lg.four}, ${lg.five}, ${lg.six}, ${lg.seven}, ${lg.eight}, ${lg.nine}, ${lg.ten})`,
    maxHeight: "100vh",
    position: "relative",
    zIndex: 1,
  },
  img: {
    height: "100vh",
    width: "auto",
    backgroundImage: "url(/underwater.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "local",
    maxHeight: "100vh",
  },
}));

export default function Overlay({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.img}>
      <Box className={classes.root}>{children}</Box>
    </Box>
  );
}
