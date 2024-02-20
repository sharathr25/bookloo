import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { Location } from "../Location";
import { BusinessType as BusinessTypeEnum } from "./BusinessType";
import { MediaUrl } from "../MediaUrl";

export const Business = t.Object({
  id: t.Optional(t.String()),
  name: t.String(),
  description: t.String(),
  address: t.String(),
  city: t.String(),
  state: t.String(),
  country: t.String(),
  pincode: t.String(),
  location: Location,
  mediaUrls: t.Optional(t.Array(MediaUrl)),
  rating: t.Optional(t.Number()),
  numberOfRatings: t.Optional(t.Number()),
  features: t.Array(Feature),
  stars: t.Optional(t.Number()),
  type: t.Enum(BusinessTypeEnum),
});

export type BusinessType = Static<typeof Business>;
