const mssql = require('mssql');





const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

  
  async function getDbConnect(){
    try {
      const pool = new mssql.ConnectionPool(sqlConfig)
      await pool.connect();
      console.info('database connected successfuly')
      return pool;
    } catch (error) {
      console.error(error,'There was a problem with the database connection');
      return error;
    }
  }

  module.exports = getDbConnect;