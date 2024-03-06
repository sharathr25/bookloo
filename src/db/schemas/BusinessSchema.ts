import { Schema } from "mongoose";
import { PointSchema } from "./PointSchema";
import { MediaSchema } from "./MediaSchema";
import { FeatureSchema } from "./FeatureSchema";
import { BusinessEnum } from "../models/BusinessEnum";

export const BusinessSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  location: {
    type: PointSchema,
    index: "2dsphere",
    required: true,
  },
  rating: { type: Number },
  numberOfRatings: { type: Number },
  stars: { type: Number },
  mediaUrls: { type: [MediaSchema], default: [] },
  features: { type: [FeatureSchema], default: [] },
  type: { type: String, enum: Object.values(BusinessEnum), required: true },
  __v: { type: Number },
});
