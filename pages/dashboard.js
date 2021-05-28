import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useSession } from "next-auth/client";
import UserDashboard from "common/layouts/UserDashboardLayout.js";
import NoLogs from "common/components/dashboard/NoLogs.js";
import Header from "common/widgets/Header";
import { getSession } from "next-auth/client";
import axios from "axios";

export default function Dashboard({ session, userTags, userLogs }) {
  return (
    <main>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <Header />
      {userLogs && userLogs[0].logs ? (
        <UserDashboard
          session={session}
          userTags={userTags}
          userLogs={userLogs[0].logs}
        />
      ) : (
        <NoLogs name={session.user.name} logs={[]} />
      )}
    </main>
  );
}

// getServerSideProps to get email
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
  const email = session.user.email;
  let host = process.env.NEXTAUTH_URL;
  const resultUserTags = await fetch(`${host}/api/user/${email}/tags`);
  const finalResultUserTags = await resultUserTags.json();

  if (!finalResultUserTags) {
    return {
      props: { notFound: true },
    };
  }

  const resultUserLogs = await fetch(`${host}/api/user/${email}/logs`);
  const finalResultUserLogs = await resultUserLogs.json();

  console.log("WHAT DO LOGS LOOK LIKE", finalResultUserLogs);

  if (!finalResultUserLogs) {
    return {
      props: { notFound: true },
    };
  }
  const result = {
    props: {
      session: session,
      userTags: finalResultUserTags,
      userLogs: finalResultUserLogs,
    },
  };
  console.log(result);
  return result;
}
