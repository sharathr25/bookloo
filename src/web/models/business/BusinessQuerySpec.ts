import { Static, t } from "elysia";
import { BusinessEnumType } from "./BusinessEnum";

export const BusinessQuerySpec = t.Object({
  name: t.Optional(t.String()),
  address: t.Optional(t.String()),
  city: t.Optional(t.String()),
  state: t.Optional(t.String()),
  country: t.Optional(t.String()),
  pincode: t.Optional(t.String()),
  longitude: t.Optional(t.Number()),
  latitude: t.Optional(t.Number()),
  rating: t.Optional(t.Number()),
  stars: t.Optional(t.Number()),
  type: t.Optional(BusinessEnumType),
});

export type BusinessQuerySpecType = Static<typeof BusinessQuerySpec>;
