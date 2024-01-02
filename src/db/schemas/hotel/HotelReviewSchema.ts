import { Schema } from "mongoose";
import { ReviewSchema } from "../ReviewSchema";

export const HotelReviewSchema = new Schema({
  hotelId: { type: Schema.ObjectId, require: true },
}).add(ReviewSchema);
