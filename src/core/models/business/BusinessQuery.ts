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
  location?: Location;
  type?: BusinessEnum;
  stars?: number;

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
    location,
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
    location?: Location;
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
    this.location = location;
  }
}
