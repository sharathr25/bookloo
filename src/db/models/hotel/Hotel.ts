import { InferSchemaType, model } from "mongoose";
import { HotelSchema } from "../../schemas/hotel/HotelSchema";
import { HOTEL } from "../../collections";

export type HotelType = InferSchemaType<typeof HotelSchema>;
export const HotelModel = model(HOTEL, HotelSchema);
