import { AssetType } from "./AssetType";

export class AssetUpdateSpec {
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