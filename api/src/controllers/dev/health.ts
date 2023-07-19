import {Request,Response} from 'express';


 export const checkHealth = (req: Request, res:Response) => {
  try {
    return res.status(200).json({
      sucess: true,
      message: "Jilitodo is doing fine",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Jilitodo is down",
    });
  }
};


