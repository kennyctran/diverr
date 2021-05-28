import React, { useState } from "react";
import { Box, Typography, Card } from "@material-ui/core";
import filterLogs from "common/utils/filterLogs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: 5,
  },
  log: {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
  },
  logList: {
    backgroundColor: theme.palette.lightBlue.main,
    borderRadius: "5px",
    padding: 10,
  },
  logText: {
    color: theme.palette.lightBlue.main,
    padding: 3,
  },
}));
export default function LogList({ logs, selectLog, selectedTags }) {
  const classes = useStyles();
  return (
    <Box className={classes.logList}>
      <Typography variant="h5" color="primary">
        Dive Logs:
      </Typography>
      {logs.map((log, i) => {
        if (
          Object.keys(selectedTags).length === 0 ||
          (log.tags && filterLogs(selectedTags, log.tags))
        ) {
          return (
            <>
              <Card
                key={i}
                className={classes.log}
                onClick={() => {
                  selectLog(i);
                }}
              >
                <Box className={classes.logText}>
                  Log No. {logs.length - i}: {new Date(log.date).toDateString()}{" "}
                  @ {log.dive_site}{" "}
                </Box>
              </Card>
              <Box className={classes.spacer} />
            </>
          );
        }
      })}
    </Box>
  );
}
//
