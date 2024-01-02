import { InferSchemaType, model } from "mongoose";
import { HostelReviewSchema } from "../../schemas/hostel/HostelReviewSchema";
import { HOSTEL_REVIEW } from "../../collections";

export type HostelReviewType = InferSchemaType<typeof HostelReviewSchema>;
export const HostelReviewModel = model(HOSTEL_REVIEW, HostelReviewSchema);
