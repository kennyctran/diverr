import executeTagQuery from "lib/db/allTagsQuery";

export default function getAllTags(req, res) {
  executeTagQuery((err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
