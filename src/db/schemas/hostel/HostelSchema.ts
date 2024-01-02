import { Schema } from "mongoose";
import { BusinessSchema } from "../BusinessSchema";

export const HostelSchema = new Schema().add(BusinessSchema);
