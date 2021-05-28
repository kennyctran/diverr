import executeUserTagsQuery from "lib/db/userTagsQuery";

export default function getUserTags(req, res) {
  executeUserTagsQuery(req.query.email, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
