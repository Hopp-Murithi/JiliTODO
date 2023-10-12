const dbConfig ={
    client:"mssql",
    connection:{
        host:process.env.DB_SERVER,
        user:process.env.DB_USER,
        port:Number(process.env.DB_PORT),
        password:process.env.DB_PWD,
        database:process.env.DB_NAME,
        options:{
            encrypt:true,
            trustServerCertificate:true
        }
    }
};


const db_config = require("knex")(dbConfig);

/**
 * Attempt to create DB connection
 */
db_config.raw("SELECT 1").then(() => {
    console.log(`database connected on port ${process.env.DB_PORT}`);
}).catch((err:any) => {
    console.error("Error connecting to the database:", err);
});

export {db_config};