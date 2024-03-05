import { Feature } from "../Feature";
import { Media } from "../Media";
import { AssetEnum } from "./AssetEnum";

export class AssetCreateSpec {
  id: string;
  businessId: string;
  discount: number;
  price: number;
  currency: string;
  mediaUrls: Media[];
  mediaFiles: File[];
  capacity?: number;
  features: Feature[];
  roomNo?: number;
  bedNo?: number;
  type: AssetEnum;

  constructor({
    id,
    businessId,
    discount,
    price,
    capacity,
    mediaUrls,
    mediaFiles,
    currency,
    features,
    roomNo,
    bedNo,
    type,
  }: {
    id: string;
    businessId: string;
    discount: number;
    price: number;
    currency: string;
    mediaUrls: Media[];
    mediaFiles: File[];
    capacity?: number;
    features: Feature[];
    roomNo?: number;
    bedNo?: number;
    type: AssetEnum;
  }) {
    this.id = id;
    this.businessId = businessId;
    this.type = type;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.mediaFiles = mediaFiles;
    this.capacity = capacity;
    this.features = features;
    this.roomNo = roomNo;
    this.mediaUrls = mediaUrls;
    this.bedNo = bedNo;
  }
}
