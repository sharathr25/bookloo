import { InferSchemaType, model } from "mongoose";
import { HotelReviewSchema } from "../../schemas/hotel/HotelReviewSchema";
import { HOTEL_REVIEW } from "../../collections";

export type HotelReviewType = InferSchemaType<typeof HotelReviewSchema>;
export const HotelReviewModel = model(HOTEL_REVIEW, HotelReviewSchema);
