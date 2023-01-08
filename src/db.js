const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "us-east.connect.psdb.cloud",
    user: "00zcfcwzk2w2tph7fp6p",
    password: "pscale_pw_9tXfLc74g0a6IfBvbYym45W9QceO6RDHwd8mrdtqu5t",
    database: "expressdb",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const result = await connection.query("SELECT 'hello world' AS RESULT ");

  console.log(result);
}

module.exports = connectDB;
