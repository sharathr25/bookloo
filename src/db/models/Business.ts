import mongoose, { InferSchemaType, model } from "mongoose";
import { BusinessSchema } from "../schemas/BusinessSchema";
import { BUSINESSES } from "../collections";
import { IdSpecType } from "../../web/models/IdSpec";

export type BusinessType = mongoose.Document<IdSpecType> &
  InferSchemaType<typeof BusinessSchema>;
export const BusinessModel = model(BUSINESSES, BusinessSchema);
