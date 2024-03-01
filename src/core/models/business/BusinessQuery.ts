import { Location } from "../Location";
import { BusinessEnum } from "./BusinessEnum";

export class BusinessQuery {
  name?: string;
  rating?: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  longitude?: number;
  latitude?: number;
  type?: BusinessEnum;
  stars?: number;
  page: number;
  pageSize: number;

  constructor({
    name,
    address,
    city,
    state,
    country,
    pincode,
    rating,
    type,
    stars,
    longitude,
    latitude,
    page,
    pageSize,
  }: {
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
  }) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
    this.rating = rating;
    this.state = state;
    this.country = country;
    this.type = type;
    this.stars = stars;
    this.longitude = longitude;
    this.latitude = latitude;
    this.page = page;
    this.pageSize = pageSize;
  }
}
