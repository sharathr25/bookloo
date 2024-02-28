import { Static, t } from "elysia";
import { AssetEnumType } from "./AssetEnum";

export const AssetQuerySpec = t.Object({
  bedNo: t.Optional(t.Number()),
  roomNo: t.Optional(t.Number()),
  capacity: t.Optional(t.Number()),
  currency: t.Optional(t.String()),
  price: t.Optional(t.Number()),
  discount: t.Optional(t.Number()),
  rating: t.Optional(t.Number()),
  stars: t.Optional(t.Number()),
  type: t.Optional(AssetEnumType),
});

export type AssetQuerySpecType = Static<typeof AssetQuerySpec>;
