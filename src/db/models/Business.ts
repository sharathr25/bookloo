import { InferSchemaType, model } from "mongoose";
import { BusinessSchema } from "../schemas/BusinessSchema";
import { BUSINESSES } from "../collections";

export type BusinessType = InferSchemaType<typeof BusinessSchema>;
export const BusinessModel = model(BUSINESSES, BusinessSchema);
