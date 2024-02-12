import { InferSchemaType, model } from "mongoose";
import { CATEGORIES } from "../collections";
import { CategorySchema } from "../schemas/CategorySchema";

export type CategoryType = InferSchemaType<typeof CategorySchema>;
export const CategoryModel = model(CATEGORIES, CategorySchema);
