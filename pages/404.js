import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import Error404 from "common/widgets/Error404";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      backgroundImage: "linear-gradient(#DEF2FD, #89DCFF, #74C6BE, #88E2DA)",
    },
  };
});

export default function FourOhFour() {
  const classes = useStyles();
  const router = useRouter();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer((prev) => prev - 1), 1000);
    timer === 0 && router.push("/");
  }, [timer]);
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Error404 timer={timer} />
      </Grid>
    </>
  );
}
