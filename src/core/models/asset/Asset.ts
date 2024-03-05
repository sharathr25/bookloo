import { Feature } from "../Feature";
import { MediaUrl } from "../MediaUrl";
import { AssetEnum } from "./AssetEnum";
import { Booking } from "./Booking";

export type Asset = {
  id: string;
  businessId: string;
  price: number;
  discount: number;
  currency: string;
  bookings: Booking[];
  mediaUrls?: MediaUrl[];
  features: Feature[];
  type: AssetEnum;
  capacity?: number;
  roomNo?: number;
  tableNo?: number;
  bedNo?: number;
};
