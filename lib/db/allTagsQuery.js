import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeTagQuery = (callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(
        `SELECT (jsonb_agg(name)) AS tags FROM tags;`
      );
      res.rows = res.rows[0].tags;
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeTagQuery;
