import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { Location } from "../Location";
import { BusinessEnumType } from "./BusinessEnum";
import { MediaUrl } from "../MediaUrl";

export const Business = t.Object({
  id: t.String(),
  name: t.String(),
  description: t.String(),
  address: t.String(),
  city: t.String(),
  state: t.String(),
  country: t.String(),
  pincode: t.String(),
  location: Location,
  mediaUrls: t.Array(MediaUrl),
  rating: t.Optional(t.Number()),
  numberOfRatings: t.Optional(t.Number()),
  features: t.Array(Feature),
  stars: t.Optional(t.Number()),
  distance: t.Optional(t.Number()),
  type: BusinessEnumType,
});

export type BusinessType = Static<typeof Business>;
