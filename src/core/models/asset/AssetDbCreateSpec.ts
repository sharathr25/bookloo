import { MediaUrl } from "../MediaUrl";
import { AssetBaseCreateSpec } from "./AssetBaseCreateSpec";

export type AssetDbCreateSpec = AssetBaseCreateSpec & {
  id: string;
  mediaUrls: MediaUrl[];
};
