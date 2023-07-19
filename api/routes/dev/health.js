const {Router} = require("express");
const route = Router();
const {health} = require("../../controllers/dev/health");

const healthBaseUrl =('/dev/health')

route.get(healthBaseUrl,()=>{
    return health;
});

module.exports = route;
