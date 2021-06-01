import Head from "next/head";
import Image from "next/image";
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useSession, getSession } from "next-auth/client";
import Dashboard from "common/layouts/Dashboard";
import Typography from "@material-ui/core/Typography";
import Header from "common/widgets/Header";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";
import Post from "common/widgets/Post.js";
import Info from "common/components/home/Info";
import data from "lib/dummyData/dummyData.js";
import Greeting from "common/components/home/Greeting";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    width: "100vw",
  },
  spacer: {
    height: "50px",
  },
  smallSpacer: {
    height: "25px",
  },
  infoContainer: {
    padding: "15px",
    minWidth: "450",
    // maxWidth: "700px",
    // width: '100%'
  },
  info: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(0, 0, 20, 0.6)",
    borderRadius: "5px",
    paddingTop: "5px",
    maxWidth: "500px",
    maxHeight: "350px",
    position: "sticky",
    top: 25,
  },
  postContainer: {
    minWidth: "450px",
    // maxWidth: "700px",
    width: "100%",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>diverr</title>
        <meta name="home" content="diverr" />
        <meta name="title" property="og:title" content="diverr" />
        <meta name="image" property="og:image" content="https://i.imgur.com/fdXUcU9.png" />
        <meta name="description" property="og:description" content="Electronic logbook for storing scuba dive records with the ability to share photos from dives on a public feed " />
      </Head>
      <Header />
      <Box className={classes.smallSpacer} />
      <Grid container justify="center" className={classes.content}>
        <Grid container justify="center">
          <Greeting />
          <Grid item xs={12} container justify="center">
            <Box className={classes.spacer} />
          </Grid>
          <Grow timeout={1750} in={true}>
            <Grid container>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                item
                xs={6}
                className={classes.postContainer}
              >
                {props.resultLogs.map((log) => (
                  <div key={log.id}>
                    <Post log={log} />
                  </div>
                ))}
              </Grid>
              <Grid item xs={6} className={classes.infoContainer}>
                <Box className={classes.info}>
                  <Info />
                </Box>
              </Grid>
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const resultLogs = await fetch(`${process.env.NEXTAUTH_URL}/api/public`);
  const finalResult = await resultLogs.json();
  const result = {
    props: { resultLogs: finalResult[0].logs },
  };
  return result;
}
