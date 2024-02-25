import { Schema } from "mongoose";

export const FeatureSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  discount: { type: Number, required: true },
  category: { type: String, required: true },
});
