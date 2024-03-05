import { Feature } from "../Feature";
import { MediaUrl } from "../MediaUrl";
import { AssetEnum } from "./AssetEnum";

export type AssetCreateSpec = {
  id: string;
  businessId: string;
  discount: number;
  price: number;
  currency: string;
  mediaUrls: MediaUrl[];
  mediaFiles: File[];
  capacity?: number;
  features: Feature[];
  roomNo?: number;
  bedNo?: number;
  type: AssetEnum;
};
