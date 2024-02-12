import { InferSchemaType, model } from "mongoose";
import { UserSchema } from "../schemas/UserSchema";
import { USERS } from "../collections";

export type UserType = InferSchemaType<typeof UserSchema>;
export const UserModel = model(USERS, UserSchema);
