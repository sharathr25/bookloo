import { AssetEnum } from "./AssetEnum";

export type AssetQuery = {
  businessId?: string;
  price?: number;
  discount?: number;
  currency?: string;
  type?: AssetEnum;
  capacity?: number;
};
