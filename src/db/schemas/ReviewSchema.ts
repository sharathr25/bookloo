import { Schema } from "mongoose";

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  pic: { type: String },
});

export const ReviewSchema = new Schema({
  id: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  user: { type: UserSchema, required: true },
});
