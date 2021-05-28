import executeCreateUser from "lib/db/createUserQuery";

export default function getUser(req, res) {
  executeCreateUser(req.body, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
