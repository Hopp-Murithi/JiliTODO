import { IsDefined, IsString, MinLength } from "class-validator";

export class AuthDto {
    @IsDefined({ message: "First name is required" })
    @IsString({ message: "First name should be a string" })
    @MinLength(3, { message: "First name too short" })
    firstName: string;
}