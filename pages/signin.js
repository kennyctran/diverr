import { providers, signIn, getSession } from "next-auth/client";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import LoginBox from "common/widgets/LoginBox";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    zIndex: "10",
    overflow: "hidden",
  },
  video: {
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function SignIn({ session, providers }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.videoContainer}>
        <video autoPlay muted loop id="dive-video" className={classes.video}>
          <source src="/diving-video-compressed.mp4" type="video/mp4" />
        </video>
      </Box>
      <LoginBox provider={providers.google} signIn={signIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });

  // Redirect user if visiting signIn page while signed in
  if (session) {
    res.writeHead(302, {
      Location: "/welcome",
    });
    res.end();
    return { props: {} };
  }
  return {
    props: {
      session: null,
      providers: (await providers(context)) || {},
    },
  };
}
