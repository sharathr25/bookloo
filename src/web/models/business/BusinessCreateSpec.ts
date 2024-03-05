import { Static, t } from "elysia";
import { Location } from "../Location";
import { Feature } from "../Feature";
import { BusinessEnumType } from "./BusinessEnum";
import { MediaUrl } from "../MediaUrl";

export const BusinessCreateSpec = t.Object({
  data: t.String(),
  files: t.Files(),
});

export const BusinessCreateDataSpec = t.Object({
  name: t.String(),
  description: t.String(),
  address: t.String(),
  city: t.String(),
  state: t.String(),
  country: t.String(),
  pincode: t.String(),
  location: Location,
  mediaUrls: t.Array(MediaUrl),
  features: t.Array(Feature),
  stars: t.Optional(t.Number()),
  type: BusinessEnumType,
});

export type BusinessCreateSpecType = Static<typeof BusinessCreateSpec>;
export type BusinessCreateDataSpecType = Static<typeof BusinessCreateDataSpec>;
