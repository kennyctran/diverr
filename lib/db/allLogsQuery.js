import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeAllLogsQuery = (callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        SELECT (jsonb_agg(json_build_object(
          'id', logs.id,
          'date', logs.date,
          'dive_site', logs.dive_site,
          'city', logs.city,
          'country', logs.country,
          'photos', (
            SELECT (jsonb_agg(photos.*)) AS photos
            FROM photos
            WHERE photos.id_log = logs.id
          ),
          'tags', (
            SELECT (jsonb_agg(tags.name)) AS tags
            FROM tags, logs_tags
            WHERE tags.id = logs_tags.id_tag AND logs.id = logs_tags.id_log
          ),
          'name', (
            SELECT users.name
            FROM users
            WHERE users.id = logs.id_user
          )
        ))) AS logs
        FROM logs
        WHERE logs.public = true;
      `);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeAllLogsQuery;
