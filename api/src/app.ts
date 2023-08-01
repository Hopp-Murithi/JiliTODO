import express, { Response, NextFunction } from "express";
import { health,auth } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { db_builder } from "./database/db_builder";
import { db_config } from "./database/db_config";
import { IRequest } from "./types/types";

export const app = express();


/**
 * allow json & url encoded payloads
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/**
 * database middleware
 */
const db_middleware = [
    async (req: IRequest, res: Response, next: NextFunction) => {
      
      const connection = await db_config.client.acquireConnection();
      const db_context: any = db_builder(connection);
  
      res.on("close", () => db_config.client.releaseConnection(connection));
      req.db_context = db_context;
  
      next();
    }, 
  ];
  app.use(db_middleware);

/**
 * jilitodo baseUrl
 */
const jiliTodoBaseUrl = "/jilitodo/v1";



/**
 * mount routes
 */
app.use(jiliTodoBaseUrl, health);
app.use(jiliTodoBaseUrl, auth);

/**
 * mount swagger
 */
app.use(
  jiliTodoBaseUrl + "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
