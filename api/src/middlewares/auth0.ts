import {auth} from 'express-oauth2-jwt-bearer';

export const checkJwt=auth({
    audience: process.env.AUTH_AUDIENCE,
    issuerBaseURL:process.env.ISSUER_URL,
})