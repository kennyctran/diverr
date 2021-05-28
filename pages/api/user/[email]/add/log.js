import executePostLog from "lib/db/postLog";
import executePostTags from "lib/db/postTags";
import executePostImages from "lib/db/postImages";

export default function postNewLog(req, res) {
  executePostLog(req.body, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });

  // post new tags
  // executePostTags(req.body.values.tags, (err, response) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     res.send(response);
  //   }
  // });
}
