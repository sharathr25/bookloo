import { BusinessEnum } from "./BusinessEnum";

export type BusinessQuery = {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  rating?: number;
  numberOfRatings?: number;
  type?: BusinessEnum;
  stars?: number;
  longitude?: number;
  latitude?: number;
  page: number;
  pageSize: number;
};
