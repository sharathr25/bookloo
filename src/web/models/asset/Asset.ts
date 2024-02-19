import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { Booking } from "./Booking";
import { AssetType as AssetTypeEnum } from "./AssetType";
import { MediaUrl } from "../MediaUrl";

export const Asset = t.Object({
  id: t.Optional(t.String()),
  businessId: t.String(),
  discount: t.Number(),
  price: t.Number(),
  currency: t.String(),
  bookings: t.Optional(t.Array(Booking)),
  mediaUrls: t.Optional(t.Array(MediaUrl)),
  mediaFiles: t.Optional(t.Files()),
  capacity: t.Optional(t.Number()),
  features: t.Array(Feature),
  roomNo: t.Optional(t.Number()),
  bedNo: t.Optional(t.Number()),
  type: t.Enum(AssetTypeEnum),
});

export type AssetType = Static<typeof Asset>;
