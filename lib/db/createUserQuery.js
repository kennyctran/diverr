import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeCreateUser = (user, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const signup = new Date().toISOString();
      const query = `
        INSERT INTO users(email, name, signup)
        VALUES ('${user.email}', '${user.name}', '${signup}')
        ON CONFLICT DO NOTHING;
        `;
      const res = await client.query(query);
      callback(null, "Welcome to Diverr!");
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeCreateUser;
