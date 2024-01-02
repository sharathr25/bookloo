import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  pic: { type: String },
});

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model("Hotel", userSchema);
