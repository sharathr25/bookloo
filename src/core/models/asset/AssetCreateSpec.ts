import { AssetType } from "./AssetType";

export class AssetCreateSpec {
  businessId: string;
  discount: number;
  price: number;
  currency: string;
  mediaFiles: File[];
  capacity?: number;
  features: Feature[];
  roomNo?: number;
  bedNo?: number;
  type: AssetType;

  constructor({
    businessId,
    discount,
    price,
    capacity,
    mediaFiles,
    currency,
    features,
    roomNo,
    bedNo,
    type,
  }: {
    businessId: string;
    discount: number;
    price: number;
    currency: string;
    mediaFiles: File[];
    capacity?: number;
    features: Feature[];
    roomNo?: number;
    bedNo?: number;
    type: AssetType;
  }) {
    this.businessId = businessId;
    this.type = type;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.mediaFiles = mediaFiles;
    this.capacity = capacity;
    this.features = features;
    this.roomNo = roomNo;
    this.bedNo = bedNo;
  }
}
