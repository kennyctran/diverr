import Typography from "@material-ui/core/Typography";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import data from "lib/dummyData/dummyData.js";
import TagList from "common/components/dashboard/DashboardTagList";
import LogList from "common/components/dashboard/DashboardLogList";
import LogDisplay from "common/components/dashboard/DashboardLogDisplay";
import UserInfo from "common/components/dashboard/UserInfo.js";
import NoLogs from "common/components/dashboard/NoLogs.js";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
  spacer: {
    height: "5%",
  },
  horizontalSpacer: {
    width: "15px",
  },
  col1Container: {
    paddingTop: "50px",
    paddingLeft: 25,
  },
  scrollTags: {
    overflowX: "scroll",
    backgroundColor: theme.palette.lightBlue.main,
    borderRadius: 5,
  },
  scrollLogs: {
    overflowX: "scroll",
  },
  logContainer: {
    height: "85%",
    width: "85%",
  },
  col2Container: {
    height: "100%",
    width: "100%",
  },
}));

export default function UserDashboardLayout({ session, userTags, userLogs }) {
  const classes = useStyles();
  const [selectedTags, changeSelectedTags] = useState({});
  const [currentLog, changeLog] = useState(0);
  const toggleSelected = (tag) => {
    changeSelectedTags((prev) => {
      let newSelected = { ...prev };
      if (newSelected[tag]) {
        delete newSelected[tag];
      } else {
        newSelected[tag] = tag;
      }
      return newSelected;
    });
  };
  const selectLog = (logListIndex) => {
    changeLog(logListIndex);
  };

  if (session) {
    if (userLogs.length) {
      return (
        <Grid container direction="row" className={classes.root}>
          <Grid item xs={3} className={classes.col1Container}>
            <UserInfo name={session.user.name} logs={userLogs} />
            <Box className={classes.spacer} />
            <Box className={classes.scrollTags}>
              <TagList
                tags={userTags}
                selectedTags={selectedTags}
                toggleSelected={toggleSelected}
              />
            </Box>
            <Box className={classes.spacer} />
            <Box className={classes.scrollLogs}>
              <LogList
                logs={userLogs}
                selectLog={selectLog}
                selectedTags={selectedTags}
              />
            </Box>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            item
            xs={8}
            className={classes.col2Container}
          >
            <Box className={classes.logContainer}>
              <LogDisplay log={userLogs[currentLog]} />
            </Box>
          </Grid>
        </Grid>
      );
    } else {
      return <NoLogs name={session.user.name} logs={[]} />;
    }
  } else {
    return (
      <>
        <Typography variant="h2" color="primary">
          Loading...
        </Typography>
      </>
    );
  }
}
