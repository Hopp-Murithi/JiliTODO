import { db_config } from "./db_config";
import { get, keys } from "lodash";

const db_builder = (connection: any) => ({
  search: async (
    tableName: string,
    whereParams: {},
    columns: "*",
    orderParam: string,
    orderBy: string,
    limitSingle: boolean = true
  ) => {
    let query = db_config.select(columns).from(tableName).where(whereParams);
    if (orderBy && orderParam) {
      query = query.orderBy(orderParam, orderBy);
    }

    const result = await query.connection(connection);
    return limitSingle && result.length === 1 ? result[0] : result;
  },
  getById: async (id: any, tableName: any) => {
    const result = await db_config
      .select()
      .from(tableName)
      .where({ id: id })
      .connection(connection);

    return get(result, "[0", {});
  },
  update: async (tableName: any, whereParams: any, data: any) => {
    return db_config(tableName)
      .connection(connection)
      .where(whereParams)
      .update(data);
  },
  delete: async (tableName: any, id: any, data: any) => {
    let result = await db_config(tableName)
      .connection(connection)
      .where({ id: id })
      .update({ deleted: data });
    return get(result, "[0", {});
  },
  exec: async (procName: any, params = []) => {
    const valueBindings = params.map(() => "?").join();
    params = params.map((x) => (x === undefined ? null : x));
    const sql = `CALL ${procName} (${valueBindings})`;
    const result = await db_config.raw(sql, params).connection(connection);
    const key = keys(result["rows"][0])[0];
    return get(result, `rows[0].${key}`, null);
  },
  raw: async (query: any, params = []) => {
    return db_config.raw(query, params).connection(connection);
  },
});

export {db_builder};
