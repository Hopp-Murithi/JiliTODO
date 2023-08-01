import { Response, Request, NextFunction } from "express";
import { dtoValidator } from "../../helpers/dtoValidators"
import { AuthDto } from "../../dtos/dto";

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //validate user data
    const { firstName } = req.body;

    const isValid = await dtoValidator(AuthDto, {
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
  } catch (e) {}
};

export { register };
