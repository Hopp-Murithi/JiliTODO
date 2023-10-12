"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "./config/config.env" });
const app_1 = require("./app");
/**
 * handling uncaught exception
 */
process.on("uncaughtException", (error) => {
    console.error(`Uncaught exception error ${error.message}`);
    console.log("The app is shutting down due to uncaught Exception error");
    process.exit(1);
});
const server = app_1.app.listen(process.env.PORT, () => {
    // console.clear();
    console.log(`The server is listening on http://localhost/${process.env.PORT} on ${process.env.NODE_ENV}mode`);
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