import { Static, t } from "elysia";

export const Feature = t.Object({
  name: t.String(),
  description: t.String(),
  price: t.Number(),
  discount: t.Number(),
  currency: t.String(),
  category: t.String(),
});

export type FeatureType = Static<typeof Feature>;
