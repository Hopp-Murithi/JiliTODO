import mssql from 'mssql';

const sqlConfig = {
    user: process.env.DB_USER as string,
    password: process.env.DB_PWD as string,
    database: process.env.DB_NAME as string,
    server: process.env.DB_SERVER as string,
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

 export async function getDbConnect(){
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

  