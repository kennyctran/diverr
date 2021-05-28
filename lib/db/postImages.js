import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executePostImages = (image, id_log, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      let rows = "";
      for (let i = 0; i < images.length; i++) {
        rows += `('${images[i]}', ${id_log}),`;
      }
      rows = rows.slice(0, rows.length - 1);
      const query = `
        INSERT INTO photos(url, id_log)
        VALUES ${rows};
        `;
      const res = await client.query(query);
      callback(null, "photos added to diverr!");
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executePostImages;
