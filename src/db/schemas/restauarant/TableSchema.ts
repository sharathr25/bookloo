import { Schema } from "mongoose";
import { AssetSchema } from "../AssetSchema";

export const tableSchema = new Schema({
  restaurantId: { type: Schema.ObjectId, require: true },
  tableNo: { type: Number, require: true },
  capacity: { type: Number, require: true },
}).add(AssetSchema);
