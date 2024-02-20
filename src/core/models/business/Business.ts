import { BusinessType } from "./BusinessType";

export class Business {
  id?: string;
  name: string;
  description: string;
  rating?: number;
  numberOfRatings?: number;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  mediaUrls?: Media[];
  mediaFiles?: File[];
  features: Feature[];
  type: BusinessType;
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
    mediaFiles,
    features,
    type,
    stars,
  }: {
    id?: string;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    location: Location;
    rating?: number;
    numberOfRatings?: number;
    mediaUrls?: Media[];
    mediaFiles?: File[];
    features: Feature[];
    type: BusinessType;
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
    this.mediaFiles = mediaFiles;
    this.numberOfRatings = numberOfRatings;
    this.features = features;
    this.type = type;
    this.stars = stars;
  }
}
