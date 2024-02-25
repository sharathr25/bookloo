import { Static, t } from "elysia";
import { Location } from "../Location";
import { Feature } from "../Feature";
import { BusinessEnumType } from "./BusinessEnum";

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
  type: BusinessEnumType,
});

export type BusinessUpdateSpecType = Static<typeof BusinessUpdateSpec>;
