const express = require("express");
const health = require("./routes/dev/health")
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
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

module.exports = app;
