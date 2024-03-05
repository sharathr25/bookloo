import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { AssetEnum } from "./AssetEnum";
import { MediaUrl } from "../MediaUrl";

export const AssetUpdateDataSpec = t.Object({
  discount: t.Number(),
  price: t.Number(),
  currency: t.String(),
  mediaFiles: t.Files(),
  capacity: t.Optional(t.Number()),
  mediaUrls: t.Array(MediaUrl),
  features: t.Array(Feature),
  roomNo: t.Optional(t.Number()),
  bedNo: t.Optional(t.Number()),
  type: t.Enum(AssetEnum),
});
export const AssetUpdateSpec = t.Object({
  data: t.String(),
  files: t.Files(),
});

export type AssetUpdateSpecType = Static<typeof AssetUpdateSpec>;
export type AssetUpdateDataSpecType = Static<typeof AssetUpdateDataSpec>;
