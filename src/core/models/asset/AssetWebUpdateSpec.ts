import { AssetBaseUpdateSpec } from "./AssetBaseUpdateSpec";

export type AssetWebUpdateSpec = AssetBaseUpdateSpec & {
  mediaFiles: File[];
};
