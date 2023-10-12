import { Request } from "express";

export interface IRequest extends Request {
  db_context: any;
}

export interface IUser {
  
}