import { MediaUrl } from "../MediaUrl";
import { AssetBaseUpdateSpec } from "./AssetBaseUpdateSpec";

export type AssetDbUpdateSpec = AssetBaseUpdateSpec & {
  mediaUrls: MediaUrl[];
};
