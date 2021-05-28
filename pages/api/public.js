import executeAllLogsQuery from "lib/db/allLogsQuery";

export default function getAllLogs(req, res) {
  executeAllLogsQuery((err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
