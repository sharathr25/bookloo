import { MediaUrl } from "../MediaUrl";
import { BusinessBaseCreateSpec } from "./BusinessBaseCreateSpec";

export type BusinessBaseUpdateSpec = BusinessBaseCreateSpec & {
  mediaUrls: MediaUrl[];
};
