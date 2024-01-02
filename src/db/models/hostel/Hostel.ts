import { InferSchemaType, model } from "mongoose";

import { HostelSchema } from "../../schemas/hostel/HostelSchema";
import { HOSTEL } from "../../collections";

export type Hostel = InferSchemaType<typeof HostelSchema>;
export const Hostel = model(HOSTEL, HostelSchema);
