import React, { useState } from "react";
import { Chip } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import splitArrayRows from "common/utils/splitArray.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  tagList: {
    backgroundColor: theme.palette.lightBlue.main,
  },
  boxBorder: {
    borderRadius: "5px",
    padding: "5px",
  },
  chip: {
    margin: "1px",
  },
  selectTags: {
    padding: 5,
  },
}));

export default function TagList({ tags, selectedTags, toggleSelected }) {
  let tagRows = splitArrayRows(tags, 3);
  let classes = useStyles();
  return (
    <Box className={classes.boxBorder}>
      <Box className={classes.boxBorder}>
        <Typography variant="h6" color="primary">
          Selected Tags:{" "}
        </Typography>
        {
          /* will map over selectedTags, and display them in a list*/
          Object.keys(selectedTags).map((tag, index) => {
            return (
              <Chip
                key={index}
                className={classes.chip}
                color="primary"
                label={tag}
                onDelete={() => {
                  toggleSelected(tag);
                }}
                size="small"
              />
            );
          })
        }
      </Box>
      <Box className={classes.selectTags}>
        {tagRows.map((row, rowIndex) => {
          return (
            <Box key={rowIndex} className="tagRow">
              {row.map((tag, tagIndex) => {
                return (
                  <Chip
                    key={tagIndex}
                    className={classes.chip}
                    label={tag.name}
                    onClick={() => {
                      toggleSelected(tag.name);
                    }}
                    color={selectedTags[tag.name] ? "primary" : "secondary"}
                    size="small"
                  />
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
