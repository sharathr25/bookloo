import { Schema } from "mongoose";

export const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, enum: ["ADMIN", "MANAGER", "PUBLIC"] },
  pic: { type: String },
  __v: { type: Number },
});
