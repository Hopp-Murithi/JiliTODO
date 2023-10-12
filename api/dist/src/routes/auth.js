"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = require("express");
const register_1 = require("../controllers/auth/register");
const auth = (0, express_1.Router)();
exports.auth = auth;
const authBaseUrl = "/dev/auth";
/**
 * register
 */
auth.post(authBaseUrl + "/register", register_1.register);
//# sourceMappingURL=auth.js.map