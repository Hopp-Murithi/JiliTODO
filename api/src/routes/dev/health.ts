import {Router} from "express";
import {checkHealth} from "../../controllers/dev/health";

export const health = Router();

const healthBaseUrl =('/dev/health')
health.get(healthBaseUrl,()=>{
    return checkHealth;
});


