const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '1433'),
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
  query: async (query, params = []) => {
    await poolConnect;
    const request = pool.request();

    // Replace each ? in the query with @param0, @param1, etc.
    let paramQuery = query;
    params.forEach((val, index) => {
      const paramName = `param${index}`;
      paramQuery = paramQuery.replace('?', `@${paramName}`);
      request.input(paramName, val);
    });

    // Execute the parameterized query
    const result = await request.query(paramQuery);
    return result;
  }
};
