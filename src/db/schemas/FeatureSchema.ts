import { Schema } from "mongoose";

export const FeatureSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  currency: { type: String, required: true },
  discount: { type: String, required: true },
  category: { type: String, required: true },
});
