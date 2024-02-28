import { Feature } from "../Feature";
import { Media } from "../Media";
import { AssetEnum } from "./AssetEnum";

export class Asset {
  id: string;
  businessId: string;
  price: number;
  discount: number;
  currency: string;
  bookings: Booking[];
  mediaUrls?: Media[];
  features: Feature[];
  type: AssetEnum;
  capacity?: number;
  roomNo?: number;
  tableNo?: number;
  bedNo?: number;

  constructor({
    id,
    businessId,
    price,
    discount,
    currency,
    bookings,
    mediaUrls,
    features,
    type,
    capacity,
    roomNo,
    bedNo,
    tableNo,
  }: {
    id: string;
    businessId: string;
    discount: number;
    price: number;
    currency: string;
    bookings: Booking[];
    mediaUrls: Media[];
    features: Feature[];
    type: AssetEnum;
    capacity?: number;
    roomNo?: number;
    bedNo?: number;
    tableNo?: number;
  }) {
    this.id = id;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.bookings = bookings;
    this.mediaUrls = mediaUrls;
    this.features = features;
    this.type = type;
    this.capacity = capacity;
    this.roomNo = roomNo;
    this.bedNo = bedNo;
    this.businessId = businessId;
    this.tableNo = tableNo;
  }
}
