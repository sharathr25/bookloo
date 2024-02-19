import { InferSchemaType, model, Schema } from "mongoose";
import { AssetSchema } from "../schemas/AssetSchema";
import { AssetType as AssetTypes } from "./AssetType";
import { ASSETS } from "../collections";

AssetSchema.discriminator(
  AssetTypes.ROOM,
  new Schema({
    roomNo: { type: Number, require: true },
    capacity: { type: Number, require: true },
  })
);

AssetSchema.discriminator(
  AssetTypes.BED,
  new Schema({
    roomNo: { type: Number, require: true },
    bedNo: { type: Number, require: true },
  })
);

AssetSchema.discriminator(
  AssetTypes.TABLE,
  new Schema({
    tableNo: { type: Number, require: true },
    capacity: { type: Number, require: true },
  })
);

export type AssetType = InferSchemaType<typeof AssetSchema>;
export const AssetModel = model(ASSETS, AssetSchema);
