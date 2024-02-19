import { AssetType } from "./AssetType";

export class AssetQuery {
  businessId?: string;
  price?: number;
  discount?: number;
  currency?: string;
  type?: AssetType;
  capacity?: number;

  constructor({
    businessId,
    price,
    discount,
    currency,
    type,
    capacity,
  }: {
    businessId?: string;
    discount?: number;
    price?: number;
    currency?: string;
    type?: AssetType;
    capacity?: number;
  }) {
    this.businessId = businessId;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.type = type;
    this.capacity = capacity;
  }
}
