import { model } from "mongoose";
import { ReviewSchema } from "../schemas/ReviewSchema";
import { REVIEWS } from "../collections";

export const ReviewModel = model(REVIEWS, ReviewSchema);
