import { Static, t } from "elysia";
import { Id } from "../IdSpec";

export const AssetGetOneSpec = t.Object({
  assetId: Id,
  businessId: Id,
});

export type AssetGetOneSpecType = Static<typeof AssetGetOneSpec>;
