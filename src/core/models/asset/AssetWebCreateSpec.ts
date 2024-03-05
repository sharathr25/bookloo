import { AssetBaseCreateSpec } from "./AssetBaseCreateSpec";

export type AssetWebCreateSpec = AssetBaseCreateSpec & {
  mediaFiles: File[];
};
