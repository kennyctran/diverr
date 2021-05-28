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
    <>
      <Header />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <SearchBar tags={resultTags} onSelect={setSearch} search={search} />
        {resultLogs.map((log) => {
          if (
            ((log.tags && log.tags.includes(search)) || search === null) &&
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
    </>
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

  const resultTags = await fetch(`${process.env.NEXTAUTH_URL}/api/tags`);
  const finalResultTags = await resultTags.json();

  const resultLogs = await fetch(`${process.env.NEXTAUTH_URL}/api/public`);
  const finalResultLogs = await resultLogs.json();

  const result = {
    props: { resultTags: finalResultTags, resultLogs: finalResultLogs[0].logs },
  };
  return result;
}
