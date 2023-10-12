import { Router } from "express";
import { register } from "../controllers/auth/register";
import { checkJwt } from "../middlewares/auth0";

const auth = Router();
const authBaseUrl = "/dev/auth";

/**
 * register
 */
auth.post(authBaseUrl + "/register",checkJwt, register);

export { auth };