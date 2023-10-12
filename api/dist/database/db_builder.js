"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_builder = void 0;
const db_config_1 = require("./db_config");
const lodash_1 = require("lodash");
const db_builder = (connection) => ({
    search: async (tableName, whereParams, columns, orderParam, orderBy, limitSingle = true) => {
        let query = db_config_1.db_config.select(columns).from(tableName).where(whereParams);
        if (orderBy && orderParam) {
            query = query.orderBy(orderParam, orderBy);
        }
        const result = await query.connection(connection);
        return limitSingle && result.length === 1 ? result[0] : result;
    },
    getById: async (id, tableName) => {
        const result = await db_config_1.db_config
            .select()
            .from(tableName)
            .where({ id: id })
            .connection(connection);
        return (0, lodash_1.get)(result, "[0", {});
    },
    update: async (tableName, whereParams, data) => {
        return (0, db_config_1.db_config)(tableName)
            .connection(connection)
            .where(whereParams)
            .update(data);
    },
    delete: async (tableName, id, data) => {
        let result = await (0, db_config_1.db_config)(tableName)
            .connection(connection)
            .where({ id: id })
            .update({ deleted: data });
        return (0, lodash_1.get)(result, "[0", {});
    },
    exec: async (procName, params = []) => {
        const valueBindings = params.map(() => "?").join();
        params = params.map((x) => (x === undefined ? null : x));
        const sql = `CALL ${procName} (${valueBindings})`;
        const result = await db_config_1.db_config.raw(sql, params).connection(connection);
        const key = (0, lodash_1.keys)(result["rows"][0])[0];
        return (0, lodash_1.get)(result, `rows[0].${key}`, null);
    },
    raw: async (query, params = []) => {
        return db_config_1.db_config.raw(query, params).connection(connection);
    },
});
exports.db_builder = db_builder;
//# sourceMappingURL=db_builder.js.map