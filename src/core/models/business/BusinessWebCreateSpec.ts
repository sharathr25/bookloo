import { BusinessBaseCreateSpec } from "./BusinessBaseCreateSpec";

export type BusinessWebCreateSpec = BusinessBaseCreateSpec & {
  mediaFiles: File[];
};
