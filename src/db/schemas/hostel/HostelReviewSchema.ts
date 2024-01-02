import { Schema } from "mongoose";
import { ReviewSchema } from "../ReviewSchema";

export const HostelReviewSchema = new Schema({
  hostelId: { type: Schema.ObjectId, require: true },
}).add(ReviewSchema);
