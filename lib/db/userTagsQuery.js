import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeUserTagsQuery = (email, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        SELECT tags.name
        FROM tags
        INNER JOIN logs_tags ON tags.id = logs_tags.id_tag
        INNER JOIN users ON users.email = '${email}' AND users.id = logs_tags.id_user
        GROUP BY tags.name;
      `);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeUserTagsQuery;
