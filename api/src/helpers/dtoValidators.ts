import { plainToInstance } from "class-transformer";
import * as validator from "class-validator";
/**
 *
 * @param schema - the target dto to validate against
 * @param requestObject - request object from users
 */
export const dtoValidator = async (
  schema: new () => {},
  requestObject: object,
) => {
  const transformedClass: any = plainToInstance(schema, requestObject);
  const errors = await validator.validate(transformedClass);
  if (errors.length > 0) {
    let isValid = errors
      .map((e) => e.constraints)
      .map((error) => Object.values(error))
      .flat();

    return String(isValid[0]) || "Internal server error";
  }

  return true;
};