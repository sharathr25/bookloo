import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { AssetType as AssetTypeEnum } from "./AssetType";

export const AssetCreateSpec = t.Object({
  businessId: t.String(),
  discount: t.Number(),
  price: t.Number(),
  currency: t.String(),
  mediaFiles: t.Files(),
  capacity: t.Optional(t.Number()),
  features: t.Array(Feature),
  roomNo: t.Optional(t.Number()),
  bedNo: t.Optional(t.Number()),
  type: t.Enum(AssetTypeEnum),
});

export type AssetCreateSpecType = Static<typeof AssetCreateSpec>;
