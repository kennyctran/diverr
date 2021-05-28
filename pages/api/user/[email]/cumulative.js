import executeAddTimeQuery from "lib/db/addTimeQuery";

export default function updateCumulative(req, res) {
  executeAddTimeQuery(req.query.email, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
