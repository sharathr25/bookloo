import { Schema } from "mongoose";

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  profilePicUrl: { type: String },
});

export const ReviewSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true, required: true },
  businessId: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  user: { type: UserSchema, required: true },
});
