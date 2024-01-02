import { Schema } from "mongoose";
import { ReviewSchema } from "../ReviewSchema";

export const RestaurantReviewSchema = new Schema({
  restaurantId: { type: Schema.ObjectId, require: true },
}).add(ReviewSchema);
