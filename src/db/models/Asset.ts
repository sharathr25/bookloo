import { InferSchemaType, model } from "mongoose";
import { AssetSchema } from "../schemas/AssetSchema";
import { ASSETS } from "../collections";

export type AssetType = InferSchemaType<typeof AssetSchema>;
export const AssetModel = model(ASSETS, AssetSchema);
