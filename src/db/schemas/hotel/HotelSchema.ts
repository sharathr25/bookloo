import { Schema } from "mongoose";
import { BusinessSchema } from "../BusinessSchema";

export const HotelSchema = new Schema({ stars: Number }).add(BusinessSchema);
