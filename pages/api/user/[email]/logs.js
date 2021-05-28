import executeUserLogsQuery from "lib/db/userLogsQuery";
import { getSession } from "next-auth/client";

export default function getUser(req, res) {
  executeUserLogsQuery(req.query.email, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
