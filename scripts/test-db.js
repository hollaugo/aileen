const { config } = require('dotenv');
const { neon } = require('@neondatabase/serverless');

config({ path: '.env' });

async function main() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`select * from projects limit 1`;
    console.log(result);
  } catch (error) {
    console.error('DB error:', error);
  }
}

main();
