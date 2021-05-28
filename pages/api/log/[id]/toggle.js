import executeChangeToPublicQuery from "lib/db/changeToPublicQuery";
import { getSession } from "next-auth/client";

export default function changeToPublic(req, res) {
  executeChangeToPublicQuery(req.query.id, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
