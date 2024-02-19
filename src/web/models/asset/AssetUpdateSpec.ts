import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { AssetType as AssetTypeEnum } from "./AssetType";

export const AssetUpdateSpec = t.Object({
  businessId: t.String(),
  discount: t.Number(),
  price: t.Number(),
  currency: t.String(),
  mediaFiles: t.Optional(t.Files()),
  capacity: t.Optional(t.Number()),
  features: t.Array(Feature),
  roomNo: t.Optional(t.Number()),
  bedNo: t.Optional(t.Number()),
  type: t.Enum(AssetTypeEnum),
});

export type AssetUpdateSpecType = Static<typeof AssetUpdateSpec>;
