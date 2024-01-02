import { Schema } from "mongoose";
import { AssetSchema } from "../AssetSchema";

export const BedSchema = new Schema({
  hostelId: { type: Schema.ObjectId, require: true },
  roomNo: { type: Number, require: true },
  bedNo: { type: Number, require: true },
}).add(AssetSchema);
