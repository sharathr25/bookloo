import { Schema } from "mongoose";

export const CategorySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});
