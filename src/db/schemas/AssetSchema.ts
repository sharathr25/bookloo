import { Schema } from "mongoose";
import { MediaSchema } from "./MediaSchema";
import { FeatureSchema } from "./FeatureSchema";
import { AssetEnum } from "../models/AssetEnum";

const BookingSchema = new Schema({
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
});

export const AssetSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true, required: true },
  businessId: { type: String, required: true },
  discount: { type: Number, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  bookings: [BookingSchema],
  mediaUrls: [MediaSchema],
  features: [FeatureSchema],
  roomNo: { type: Number },
  tableNo: { type: Number },
  bedNo: { type: Number },
  capacity: { type: Number },
  type: { type: String, enum: Object.values(AssetEnum), required: true },
  __v: { type: Number },
});
