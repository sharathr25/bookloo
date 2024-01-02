import { Schema } from "mongoose";
import { AssetSchema } from "../AssetSchema";

export const RoomSchema = new Schema({
  hotelId: { type: Schema.ObjectId, require: true },
  roomNo: { type: Number, require: true },
  capacity: { type: Number, require: true },
}).add(AssetSchema);
