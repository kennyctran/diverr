import { React, useState, useEffect } from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Header from "common/widgets/Header";
import { getSession, useSession } from "next-auth/client";
import AddButton from "common/components/buttons/AddButton.js";
import Column1 from "common/widgets/Form/formCol1.js";
import Column2 from "common/widgets/Form/formCol2.js";
import Column3 from "common/widgets/Form/formCol3.js";
import Column4 from "common/widgets/Form/formCol4.js";
import FormTags from "common/widgets/Form/tags.js";
import FormMedia from "common/widgets/Form/photos.js";
import { useFormik } from "formik";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  col: {
    width: "100%",
    padding: 50,
  },
  submit: {
    height: 56,
    width: "25%",
    marginBottom: 10,
  },
  root: {
    color: "#E9F7F9",
  },
}));

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return {
      props: {},
    };
  }
  if (session) {
    const timeAndId = await fetch(
      `${process.env.NEXTAUTH_URL}/api/user/${session.user.email}/cumulative`
    );
    const finalTimeAndId = await timeAndId.json();

    return {
      props: {
        email: session.user.email,
        cumulative_time: Number(finalTimeAndId.sum),
        userId: finalTimeAndId.id,
        session: session.user,
      },
    };
  }
}

export default function AddNewLogForm({
  email,
  cumulative_time,
  userId,
  session,
}) {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      city: "",
      country: "",
      site: "",
      center: "",
      instructor: "",
      instructorCert: "",
      timeIn: "",
      timeOut: "",
      startPressure: "",
      endPressure: "",
      depth: "",
      abt: "",
      rnt: "",
      tbt: "",
      visibility: "",
      airTemp: "",
      waterTemp: "",
      weight: "",
      notes: "",
    },
    onSubmit: (values) => {
      values.tags = tags;
      values.images = images;
      values.userId = userId;

      //determines privacy
      if (values.privacy === "public") {
        values.public = true;
      }
      delete values.privacy;

      //thermal insulation
      if (values.suitUp === "wetsuit") {
        values.wet_suit = true;
      }
      delete values.suitUp;

      //environment
      if (values.environment === "controlled") {
        values.controlled_env = true;
      } else {
        if (values.environment === "boat") {
          values.boat = true;
        }
      }
      delete values.environment;

      //fresh v salt
      if (values.water === "salt") {
        values.salt_water = true;
      }
      delete values.water;

      //checkboxes
      if (values.checked) {
        for (let item of values.checked) {
          values[item] = true;
        }
      }

      //times
      values.abt = Number(values.abt);
      values.rnt = Number(values.rnt);
      values.tbt = Number(values.tbt);
      values.cumulative_time = cumulative_time + values.abt;

      //POST new log
      let host = process.env.NEXTAUTH_URL;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };

      fetch(`/api/user/${email}/add/log`, options)
        .then((result) => {
          alert("Log added successfully!");
          formik.handleReset();
        })
        .catch((err) => {
          alert("Sorry, please try again!");
        });
    },
  });

  return (
    <>
      <Header />
      <form className={classes.root}>
        <Grid
          container
          // justify="center"
          // alignItems="center"
          spacing={1}
          direction="row"
        >
          <Grid item xs={4}>
            <Column1 formik={formik} />
          </Grid>
          <Grid item xs={4}>
            <Column2 formik={formik} />
          </Grid>
          <Grid item xs={4} style={{ marginTop: 50, paddingRight: 50 }}>
            <Column3 formik={formik} />
          </Grid>
          <Grid item xs={12} container>
            <Column4 formik={formik} />
          </Grid>
          <Grid className={classes.col} container spacing={3}>
            <FormTags tags={tags} setTags={setTags} />
            <FormMedia images={images} setImages={setImages} />
          </Grid>
          <Grid justify="center" container spacing={3}>
            <Button
              className={classes.submit}
              onClick={formik.handleSubmit}
              color="primary"
              variant="contained"
              fullWidth
              // type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
