import { Schema } from "mongoose";
import { PointSchema } from "./PointSchema";
import { MediaSchema } from "./MediaSchema";
import { FeatureSchema } from "./FeatureSchema";

export const BusinessSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  location: { type: PointSchema, require: true },
  rating: { type: String, required: true },
  numberOfRatings: { type: String, required: true },
  media: [MediaSchema],
  features: [FeatureSchema],
}, { discriminatorKey: 'type' });
