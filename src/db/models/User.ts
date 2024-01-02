import { InferSchemaType, model } from "mongoose";
import { UserSchema } from "../schemas/UserSchema";
import { USER } from "../collections";

export type UserType = InferSchemaType<typeof UserSchema>;
export const UserModel = model(USER, UserSchema);
