import { InferSchemaType, model } from "mongoose";
import { RestaurantReviewSchema } from "../../schemas/restauarant/RestaurantReviewSchema";
import { RESTAURANT_REVIEW } from "../../collections";

export type RestaurantReviewType = InferSchemaType<
  typeof RestaurantReviewSchema
>;
export const RestaurantReviewModel = model(
  RESTAURANT_REVIEW,
  RestaurantReviewSchema
);
