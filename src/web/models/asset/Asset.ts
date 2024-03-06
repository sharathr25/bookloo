import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { Booking } from "./Booking";
import { AssetEnumType } from "./AssetEnum";
import { MediaUrl } from "../MediaUrl";

export const Asset = t.Object({
  id: t.String(),
  businessId: t.String(),
  discount: t.Number(),
  price: t.Number(),
  currency: t.String(),
  bookings: t.Array(Booking),
  mediaUrls: t.Array(MediaUrl),
  capacity: t.Optional(t.Number()),
  features: t.Array(Feature),
  tableNo: t.Optional(t.Number()),
  roomNo: t.Optional(t.Number()),
  bedNo: t.Optional(t.Number()),
  type: AssetEnumType,
});

export type AssetType = Static<typeof Asset>;
