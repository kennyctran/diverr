import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Card } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import PostHeader from "common/widgets/Posts/PostHeader.js";
import PostImages from "common/widgets/Posts/PostImages.js";
import SmallTagContainer from "common/widgets/SmallTagContainer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.lightBlue.main,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post({ log, handleClick }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { city, country, date, dive_site, name, photos, tags } = log;
  return (
    <Card className={classes.root}>
      <PostHeader
        name={name}
        location={`${dive_site}, ${city}, ${country}`}
        date={date}
      />
      <CardContent>
        <PostImages photos={photos} />
      </CardContent>
      <CardContent>
        <SmallTagContainer tags={tags} handleClick={handleClick} />
      </CardContent>
    </Card>
  );
}
