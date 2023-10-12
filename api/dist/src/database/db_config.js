"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_config = void 0;
const dbConfig = {
    client: "mssql",
    connection: {
        host: process.env.DB_SERVER,
        user: process.env.DB_USER,
        port: Number(process.env.DB_PORT),
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    }
};
const db_config = require("knex")(dbConfig);
exports.db_config = db_config;
//# sourceMappingURL=db_config.js.map