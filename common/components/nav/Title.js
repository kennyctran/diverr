import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  spacer: {
    width: "13px",
  },
}));

export default function Title({ classes }) {
  const classes2 = useStyles();
  return (
    <Grid container item xs={4} alignItems="center">
      <Image src="/logo-center.svg" height={50} width={50} />
      <Box className={classes2.spacer} />
      <Typography
        variant="h3"
        color="primary"
        align="center"
        display="inline"
        className={classes.title}
      >
        diverr
      </Typography>
    </Grid>
  );
}
