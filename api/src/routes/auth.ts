import { Router } from "express";
import { register } from "../controllers/auth/register";

const auth = Router();
const authBaseUrl = "/dev/auth";

/**
 * register
 */
auth.post(authBaseUrl + "/register", register);

export { auth };