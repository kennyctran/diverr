import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSession, getSession } from "next-auth/client";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
}));

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  const user = session.user;

  if (session) {
    try {
      const newUser = await fetch(
        `${process.env.NEXTAUTH_URL}/api/new/${user.email}`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-type": "application/json" },
        }
      );
      console.log("New user created - welcome!");
    } catch (err) {
      console.error(err);
    }
  }
  return {
    props: {},
  };
}

export default function Welcome() {
  const [session, loading] = useSession();
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    session && setTimeout(() => router.push("/feed"), 2000);
  }, [session]);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {session && (
        <Typography variant="h2" color="primary">
          {`Welcome back, ${session.user.name}`}
        </Typography>
      )}
    </Grid>
  );
}
