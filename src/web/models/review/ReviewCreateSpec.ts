import { Static, t } from "elysia";

export const ReviewCreateSpec = t.Object({
  review: t.String(),
  rating: t.Number(),
  user: t.Object({
    id: t.String(),
    name: t.String(),
    profilePicUrl: t.Optional(t.String()),
    email: t.String(),
  }),
});

export type ReviewCreateSpecType = Static<typeof ReviewCreateSpec>;
