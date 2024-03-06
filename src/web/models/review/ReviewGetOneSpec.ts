import { Static, t } from "elysia";
import { Id } from "../IdSpec";

export const ReviewGetOneSpec = t.Object({
  reviewId: Id,
  businessId: Id,
});

export type ReviewGetOneSpecType = Static<typeof ReviewGetOneSpec>;
