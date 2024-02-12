import { AssetType } from "./AssetType";

export type AssetDataType = {
  id: string;
  businessId: String,
  discount: number;
  price: number;
  currency: string;
  bookings: [Booking];
  media: [Media];
  features: [Feature];
  type: AssetType
  capacity?: number;
  roomNo?: number;
  bedNo?: number
}

export class Asset {
  id: string;
  price: number;
  discount: number;
  currency: string;
  bookings: [Booking];
  media: [Media];
  features: [Feature];
  type: AssetType;
  capacity?: number;
  roomNo?: number;
  bedNo?: number;

  constructor({
    id,
    price,
    discount,
    currency,
    bookings,
    media,
    features,
    type,
    capacity,
    roomNo,
    bedNo
  }: {
    id: string;
    discount: number;
    price: number;
    currency: string;
    bookings: [Booking];
    media: [Media];
    features: [Feature];
    type: AssetType,
    capacity?: number,
    roomNo?: number,
    bedNo?: number,
  }) {
    this.id = id;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.bookings = bookings;
    this.media = media;
    this.features = features;
    this.type = type;
    this.capacity = capacity;
    this.roomNo = roomNo;
    this.bedNo = bedNo;
  }
}
