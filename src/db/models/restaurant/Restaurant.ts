import { InferSchemaType, model } from "mongoose";
import { RestaurantSchema } from "../../schemas/restauarant/RestaurantSchema";
import { RESTAURANT } from "../../collections";

export type RestaurantType = InferSchemaType<typeof RestaurantSchema>;
export const RestaurantModel = model(RESTAURANT, RestaurantSchema);
