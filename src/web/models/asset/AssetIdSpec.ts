import { Static, t } from "elysia";
import { Id } from "../IdSpec";

export const AssetIdSpec = t.Object({
  assetId: Id,
});

export type AssetIdSpecType = Static<typeof AssetIdSpec>;
