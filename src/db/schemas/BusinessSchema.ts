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
    require: true,
    index: "2dsphere",
    required: true,
  },
  rating: { type: Number, required: false },
  numberOfRatings: { type: Number, required: false },
  stars: { type: Number, required: false },
  mediaUrls: { type: [MediaSchema], default: [], require: true },
  features: { type: [FeatureSchema], default: [], require: true },
  type: { type: String, enum: Object.values(BusinessEnum), required: true },
});
