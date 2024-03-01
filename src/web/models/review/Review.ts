import { Static, t } from "elysia";

export const Review = t.Object({
  id: t.String(),
  businessId: t.String(),
  review: t.String(),
  rating: t.Number(),
  user: t.Object({
    id: t.String(),
    name: t.String(),
    profilePicUrl: t.Optional(t.String()),
    email: t.String(),
  }),
});

export type ReviewType = Static<typeof Review>;
