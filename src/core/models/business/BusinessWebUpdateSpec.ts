import { BusinessBaseUpdateSpec } from "./BusinessBaseUpdateSpec";

export type BusinessWebUpdateSpec = BusinessBaseUpdateSpec & {
  mediaFiles: File[];
};
