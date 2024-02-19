import { InferSchemaType, Schema, model } from "mongoose";
import { BusinessSchema } from "../schemas/BusinessSchema";
import { BusinessType as BusinessTypes } from "./BusinessType";
import { BUSINESSES } from "../collections";

BusinessSchema.discriminator(
  BusinessTypes.HOTEL,
  new Schema({ stars: Number })
);
BusinessSchema.discriminator(BusinessTypes.HOSTEL, new Schema({}));
BusinessSchema.discriminator(BusinessTypes.RESTUARANT, new Schema({}));

export type BusinessType = InferSchemaType<typeof BusinessSchema>;
export const BusinessModel = model(BUSINESSES, BusinessSchema);
