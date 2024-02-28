import { Feature } from "../Feature";
import { Location } from "../Location";
import { Media } from "../Media";
import { BusinessEnum } from "./BusinessEnum";

export class Business {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  mediaUrls: Media[];
  features: Feature[];
  type: BusinessEnum;
  rating?: number;
  numberOfRatings?: number;
  stars?: number;

  constructor({
    id,
    name,
    description,
    address,
    city,
    state,
    country,
    pincode,
    location,
    rating,
    numberOfRatings,
    mediaUrls,
    features,
    type,
    stars,
  }: {
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    location: Location;
    mediaUrls: Media[];
    features: Feature[];
    type: BusinessEnum;
    rating?: number;
    numberOfRatings?: number;
    stars?: number;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
    this.location = location;
    this.rating = rating;
    this.state = state;
    this.country = country;
    this.mediaUrls = mediaUrls;
    this.numberOfRatings = numberOfRatings;
    this.features = features;
    this.type = type;
    this.stars = stars;
  }
}
