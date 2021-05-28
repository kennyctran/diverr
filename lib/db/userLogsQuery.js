import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeUserLogsQuery = (email, callback) => {
  const query = `
    SELECT users.id, users.name,
    (
      SELECT (jsonb_agg(json_build_object(
        'id', logs.id,
        'public', logs.public,
        'cumulative_time', logs.cumulative_time,
        'date', logs.date,
        'dive_site', logs.dive_site,
        'city', logs.city,
        'country', logs.country,
        'visibility', logs.visibility,
        'air_temp', logs.air_temp,
        'water_temp', logs.water_temp,
        'weight', logs.weight,
        'hood', logs.hood,
        'gloves', logs.gloves,
        'wet_suit', logs.wet_suit,
        'waves', logs.waves,
        'current', logs.current,
        'controlled_env', logs.controlled_env,
        'salt_water', logs.salt_water,
        'boat', logs.boat,
        'max_depth', logs.max_depth,
        'time_in', logs.time_in,
        'time_out', logs.time_out,
        'rnt', logs.rnt,
        'abt', logs.abt,
        'tbt', logs.tbt,
        'start_pressure', logs.start_pressure,
        'end_pressure', logs.end_pressure,
        'notes', logs.notes,
        'dive_center', logs.dive_center,
        'dive_instructor', logs.dive_instructor,
        'instructor_cert', logs.instructor_cert,
        'photos', (
          SELECT (jsonb_agg(photos.*)) AS photos
          FROM photos
          WHERE photos.id_log = logs.id
        ),
        'tags', (
          SELECT (jsonb_agg(tags.name)) AS tags
          FROM tags, logs_tags
          WHERE tags.id = logs_tags.id_tag AND logs.id = logs_tags.id_log
        )
      ))) AS logs
      FROM logs
      WHERE logs.id_user = users.id
    )
    FROM users
    WHERE email = '${email}';
  `;

  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(query);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeUserLogsQuery;
