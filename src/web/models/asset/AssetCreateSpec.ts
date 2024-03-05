import { Static, t } from "elysia";
import { Feature } from "../Feature";
import { AssetEnumType } from "./AssetEnum";
import { MediaUrl } from "../MediaUrl";

export const AssetCreateDataSpec = t.Object({
  discount: t.Number(),
  price: t.Number(),
  currency: t.String(),
  mediaUrls: t.Array(MediaUrl),
  mediaFiles: t.Files(),
  capacity: t.Optional(t.Number()),
  features: t.Array(Feature),
  roomNo: t.Optional(t.Number()),
  bedNo: t.Optional(t.Number()),
  type: AssetEnumType,
});
export const AssetCreateSpec = t.Object({
  data: t.String(),
  files: t.Files(),
});

export type AssetCreateSpecType = Static<typeof AssetCreateSpec>;
export type AssetCreateDataSpecType = Static<typeof AssetCreateDataSpec>;
