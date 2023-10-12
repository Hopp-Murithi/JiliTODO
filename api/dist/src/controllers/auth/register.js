"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const dtoValidators_1 = require("../../helpers/dtoValidators");
const dto_1 = require("../../dtos/dto");
const register = async (req, res, next) => {
    try {
        //validate user data
        const { firstName } = req.body;
        const isValid = await (0, dtoValidators_1.dtoValidator)(dto_1.AuthDto, {
            firstName,
        });
        if (isValid != true) {
            return res.status(400).json({
                success: false,
                message: isValid,
            });
        }
        return res.status(200).json({
            success: true,
            message: "Success",
        });
    }
    catch (e) { }
};
exports.register = register;
//# sourceMappingURL=register.js.map