import { Static, t } from "elysia";
import { Location } from "../Location";
import { Feature } from "../Feature";
import { BusinessType } from "./BusinessType";

export const BusinessUpdateSpec = t.Object({
  name: t.String(),
  description: t.String(),
  address: t.String(),
  city: t.String(),
  state: t.String(),
  country: t.String(),
  pincode: t.String(),
  location: Location,
  mediaFiles: t.Files(),
  features: t.Array(Feature),
  stars: t.Optional(t.Number()),
  type: t.Enum(BusinessType),
});

export type BusinessUpdateSpecType = Static<typeof BusinessUpdateSpec>;
