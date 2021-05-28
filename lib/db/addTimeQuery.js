import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeAddTimeQuery = (email, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      let res = await client.query(`
        SELECT SUM(logs.abt), users.id
        FROM logs, users
        WHERE logs.id_user = users.id AND users.email = '${email}'
        GROUP BY users.id
      `);

      if (!res.rows.length) {
        res = await client.query(`
          SELECT users.id
          FROM users
          WHERE users.email = '${email}'
        `);

        res.rows[0].sum = 0;
      }

      callback(null, res.rows[0]);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeAddTimeQuery;
