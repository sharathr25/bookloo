import { Schema } from "mongoose";
import { MediaSchema } from "./MediaSchema";
import { FeatureSchema } from "./FeatureSchema";

const BookingSchema = new Schema({
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
});

export const AssetSchema = new Schema({
  id: { type: String, required: true },
  discount: { type: Number, required: true },
  price: { type: Number, required: true },
  currency: { type: String, require: true },
  bookings: [BookingSchema],
  media: [MediaSchema],
  features: [FeatureSchema],
});
