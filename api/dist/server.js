require("dotenv").config({ path: "./config/config.env" });
const app = require("./app");
const getDbConnect = require("./database/db_builder");
getDbConnect()
    .then(() => { })
    .catch((error) => {
    console.error(error.message);
});
/**
 * handling uncaught exception
 */
process.on("uncaughtException", (error) => {
    console.error(`Uncaught exception error ${error.message}`);
    console.log("The app is shutting down due to uncaught Exception error");
    process.exit(1);
});
const server = app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`The server is listening on port ${process.env.PORT} on ${process.env.NODE_ENV} environment`);
});
/**
 * handling unhandled rejection error
 */
process.on("unhandledRejection", (error) => {
    console.error(`Unhandled rejection error: ${error.message}`);
    console.log("The app is shutting down due to unhandled rejection");
    server.close(() => {
        process.exit(1);
    });
});
//# sourceMappingURL=server.js.map