import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executePostLog = (values, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      let unnestString = "";
      if (!values.images.length) {
        unnestString = null;
      } else {
        let addQuotes = values.images.map((image) => `'${image}'`);
        unnestString = `unnest(ARRAY[${addQuotes}])`;
      }

      const query = `WITH new_log AS (
        INSERT INTO logs (
          public,
          id_user,
          date,
          dive_site,
          city,
          country,
          visibility,
          air_temp,
          water_temp,
          weight,
          hood,
          gloves,
          wet_suit,
          waves,
          current,
          controlled_env,
          salt_water,
          boat,
          max_depth,
          time_in,
          time_out,
          rnt,
          abt,
          tbt,
          start_pressure,
          end_pressure,
          notes,
          dive_center,
          dive_instructor,
          instructor_cert,
          boots,
          cumulative_time
        ) VALUES (
          ${values.public || false},
          ${values.userId || null},
          '${values.date || null}',
          '${values.site || null}',
          '${values.city || null}',
          '${values.country || null}',
          '${values.visibility || null}',
          '${values.airTemp || null}',
          '${values.waterTemp || null}',
          '${values.weight || null}',
          ${values.hood || false},
          ${values.gloves || false},
          ${values.wet_suit || false},
          ${values.waves || false},
          ${values.current || false},
          ${values.boat || false},
          ${values.salt_water || false},
          ${values.boat || false},
          '${values.depth || null}',
          '${values.timeIn || null}',
          '${values.timeOut || null}',
          ${values.rnt || null},
          ${values.abt || null},
          ${values.tbt || null},
          '${values.startPressure || null}',
          '${values.endPressure || null}',
          '${values.notes || null}',
          '${values.center || null}',
          '${values.instructor || null}',
          '${values.instructorCert || null}',
          ${values.boots || false},
          ${values.cumulative_time || null}
        )
        RETURNING id
      )
      INSERT INTO photos (url, id_log)
      SELECT ${unnestString}, id
      FROM new_log;
      `;

      const res = await client.query(query);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executePostLog;
