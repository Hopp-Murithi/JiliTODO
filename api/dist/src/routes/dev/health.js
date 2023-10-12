"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const express_1 = require("express");
const health_1 = require("../../controllers/dev/health");
exports.health = (0, express_1.Router)();
const healthBaseUrl = ('/dev/health');
exports.health.get(healthBaseUrl, () => {
    return health_1.checkHealth;
});
//# sourceMappingURL=health.js.map