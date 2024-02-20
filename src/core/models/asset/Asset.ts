import { AssetType } from "./AssetType";

export class Asset {
  id?: string;
  businessId: string;
  price: number;
  discount: number;
  currency: string;
  bookings?: Booking[];
  mediaUrls?: Media[];
  mediaFiles?: File[];
  features: Feature[];
  type: AssetType;
  capacity?: number;
  roomNo?: number;
  bedNo?: number;

  constructor({
    id,
    businessId,
    price,
    discount,
    currency,
    bookings,
    mediaUrls,
    mediaFiles,
    features,
    type,
    capacity,
    roomNo,
    bedNo,
  }: {
    id?: string;
    businessId: string;
    discount: number;
    price: number;
    currency: string;
    bookings?: Booking[];
    mediaUrls?: Media[];
    mediaFiles?: File[];
    features: Feature[];
    type: AssetType;
    capacity?: number;
    roomNo?: number;
    bedNo?: number;
  }) {
    this.id = id;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.bookings = bookings;
    this.mediaUrls = mediaUrls;
    this.mediaFiles = mediaFiles;
    this.features = features;
    this.type = type;
    this.capacity = capacity;
    this.roomNo = roomNo;
    this.bedNo = bedNo;
    this.businessId = businessId;
  }
}
