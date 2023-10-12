"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const db_builder_1 = require("./database/db_builder");
const db_config_1 = require("./database/db_config");
exports.app = (0, express_1.default)();
/**
 * allow json & url encoded payloads
 */
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
/**
 * database middleware
 */
const db_middleware = [
    async (req, res, next) => {
        const connection = await db_config_1.db_config.client.acquireConnection();
        const db_context = (0, db_builder_1.db_builder)(connection);
        res.on("close", () => db_config_1.db_config.client.releaseConnection(connection));
        req.db_context = db_context;
        next();
    },
];
exports.app.use(db_middleware);
/**
 * jilitodo baseUrl
 */
const jiliTodoBaseUrl = "/jilitodo/v1";
/**
 * mount routes
 */
exports.app.use(jiliTodoBaseUrl, routes_1.health);
exports.app.use(jiliTodoBaseUrl, routes_1.auth);
/**
 * mount swagger
 */
exports.app.use(jiliTodoBaseUrl + "/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
//# sourceMappingURL=app.js.map