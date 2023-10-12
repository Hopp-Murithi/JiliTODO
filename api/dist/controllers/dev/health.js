"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHealth = void 0;
const checkHealth = (req, res) => {
    try {
        return res.status(200).json({
            sucess: true,
            message: "Jilitodo is doing fine",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Jilitodo is down",
        });
    }
};
exports.checkHealth = checkHealth;
//# sourceMappingURL=health.js.map