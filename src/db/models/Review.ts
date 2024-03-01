import { InferSchemaType, model } from "mongoose";
import { ReviewSchema } from "../schemas/ReviewSchema";
import { REVIEWS } from "../collections";

export type ReviewType = InferSchemaType<typeof ReviewSchema>;
export const ReviewModel = model(REVIEWS, ReviewSchema);
