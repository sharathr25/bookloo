import { Feature } from "../Feature";
import { AssetEnum } from "./AssetEnum";

export type AssetBaseCreateSpec = {
  businessId: string;
  discount: number;
  price: number;
  currency: string;
  features: Feature[];
  type: AssetEnum;
  bedNo?: number;
  capacity?: number;
  roomNo?: number;
};
