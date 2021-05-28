import { Pool } from "pg";
import { getSession } from "next-auth/client";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeQuery = (email, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        SELECT * FROM users WHERE email = '${email}';
      `);
      callback(res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeQuery;

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   const session = await getSession({ req });
//   console.log('email address of logged in user', session.user.email);

//   return { props: {} };
// }
