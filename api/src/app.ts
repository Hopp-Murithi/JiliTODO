import express from "express";
import {health} from "./routes/dev/health";
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json";

export const app = express();
const jiliTodoBaseUrl = "/jilitodo/v1";
/**
 * mounting middlwares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jiliTodoBaseUrl,health);



app.use(
    jiliTodoBaseUrl + '/swagger', 
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
    );


