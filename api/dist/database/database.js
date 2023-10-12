"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbConnect = void 0;
const mssql_1 = __importDefault(require("mssql"));
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
        encrypt: false,
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};
function getDbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = new mssql_1.default.ConnectionPool(sqlConfig);
            yield pool.connect();
            console.info('database connected successfuly');
            return pool;
        }
        catch (error) {
            console.error(error, 'There was a problem with the database connection');
            return error;
        }
    });
}
exports.getDbConnect = getDbConnect;
