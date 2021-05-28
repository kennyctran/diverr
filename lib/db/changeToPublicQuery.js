import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeChangeToPublicQuery = (id, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        UPDATE logs
        SET public = NOT public
        WHERE id = ${id};
      `);
      callback(null, "log status changed");
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeChangeToPublicQuery;
