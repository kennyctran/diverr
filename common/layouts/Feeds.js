import Grid from "@material-ui/core/Grid";

import Header from "common/widgets/Header";
import Post from "common/widgets/Post.js";
import SearchBar from "common/widgets/SearchBar.js";
import data from "lib/dummyData/dummyData.js";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import axios from "axios";

export default function Feed({ resultTags, resultLogs }) {
  const [search, setSearch] = useState(null);

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <SearchBar tags={resultTags} onSelect={setSearch} search={search} />
      {resultLogs.map((log) => {
        if (
          (log.tags.includes(search) || search === null) &&
          log.photos.length > 0
        ) {
          return (
            <div key={log.id}>
              <Post log={log} handleClick={setSearch} />
            </div>
          );
        }
      })}
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });

  // Redirect user if visiting signIn page while signed in
  if (!session) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return { props: {} };
  }
  const resultTags = await axios.get(`${process.env.NEXTAUTH_URL}/api/tags`); // REPLACE EMAIL WITH ${email} IN THE FUTURE
  const resultLogs = await axios.get(`${process.env.NEXTAUTH_URL}/api/public`); // REPLACE EMAIL WITH ${email} IN THE FUTURE
  const result = {
    props: { resultTags: resultTags.data, resultLogs: resultLogs.data[0].logs },
  };
  return result;
}
