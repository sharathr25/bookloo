import { Static, t } from "elysia";
import { Id } from "../IdSpec";

export const ReviewDeleteSpec = t.Object({
  reviewId: Id,
  businessId: Id,
});

export type ReviewDeleteSpecType = Static<typeof ReviewDeleteSpec>;
