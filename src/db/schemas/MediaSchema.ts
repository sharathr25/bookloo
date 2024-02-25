import { InferSchemaType, Schema } from "mongoose";

export const MediaSchema = new Schema({
  url: { type: String, required: true },
  type: { type: String, required: true, enum: ["IMAGE", "VIDEO"] },
});

export type MediaType = InferSchemaType<typeof MediaSchema>;
