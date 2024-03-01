import { Static, t } from "elysia";
import { Id } from "../IdSpec";

export const ReviewIdSpec = t.Object({
  reviewId: Id,
});

export type ReviewIdSpecType = Static<typeof ReviewIdSpec>;
