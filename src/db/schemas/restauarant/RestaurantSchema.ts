import { Schema } from "mongoose";
import { BusinessSchema } from "../BusinessSchema";

export const RestaurantSchema = new Schema().add(BusinessSchema);
