import { Static, t } from "elysia";
import { BusinessEnumType } from "./BusinessEnum";

export const BusinessQuerySpec = t.Object({
  name: t.Optional(t.String()),
  address: t.Optional(t.String()),
  city: t.Optional(t.String()),
  state: t.Optional(t.String()),
  country: t.Optional(t.String()),
  pincode: t.Optional(t.String()),
  longitude: t.Optional(t.Numeric()),
  latitude: t.Optional(t.Numeric()),
  rating: t.Optional(t.Number()),
  stars: t.Optional(t.Number()),
  type: t.Optional(BusinessEnumType),
  // there is an open bug where default is not working https://github.com/elysiajs/elysia/issues/243
  // so defaulting this manually in the route handler
  // page: t.Optional(t.Number({ default: DEFAULT_PAGE })),
  // pageSize: t.Optional(t.Number({ default: DEFAULT_PAGE_SIZE })),
  page: t.Optional(t.Numeric()),
  pageSize: t.Optional(t.Numeric()),
});

export type BusinessQuerySpecType = Static<typeof BusinessQuerySpec>;
