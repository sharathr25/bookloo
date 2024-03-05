import { MediaUrl } from "../MediaUrl";
import { BusinessBaseCreateSpec } from "./BusinessBaseCreateSpec";

export type BusinessDbCreateSpec = BusinessBaseCreateSpec & {
  id: string;
  mediaUrls: MediaUrl[];
};
