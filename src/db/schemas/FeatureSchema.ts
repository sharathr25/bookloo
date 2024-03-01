import { Schema } from "mongoose";

export const FeatureSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
    currency: { type: String, default: null },
    discount: { type: Number, default: 0 },
    category: { type: String, required: true },
  },
  { _id: false }
);
