import { MediaUrl } from "../MediaUrl";
import { AssetBaseCreateSpec } from "./AssetBaseCreateSpec";

export type AssetBaseUpdateSpec = AssetBaseCreateSpec & {
  mediaUrls: MediaUrl[];
};
