import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executePostTags = (tags, callback) => {
  if (tags.length) {
    (async () => {
      const client = await pool.connect();
      try {
        let rows = "";
        for (let i = 0; i < tags.length; i++) {
          rows += `('${tags[i]}'),`;
        }
        rows = rows.slice(0, rows.length - 1);
        const query = `
        INSERT INTO tags(name)
        VALUES ${rows}
        ON CONFLICT DO NOTHING;
        `;
        const res = await client.query(query);
        callback(null, "tags added to diverr!");
      } finally {
        client.release();
      }
    })().catch((err) => console.error(err.stack));
  }
};

export default executePostTags;
