import { Location } from "../Location";
import { BusinessEnum } from "./BusinessEnum";

export class BusinessUpdateSpec {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  mediaFiles: File[];
  features: Feature[];
  stars?: number;
  type: BusinessEnum;

  constructor({
    name,
    description,
    address,
    city,
    state,
    country,
    pincode,
    location,
    mediaFiles,
    features,
    stars,
    type,
  }: {
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    location: Location;
    mediaFiles: File[];
    features: Feature[];
    stars?: number;
    type: BusinessEnum;
  }) {
    this.name = name;
    this.description = description;
    this.city = city;
    this.address = address;
    this.state = state;
    this.country = country;
    this.pincode = pincode;
    this.location = location;
    this.mediaFiles = mediaFiles;
    this.features = features;
    this.stars = stars;
    this.type = type;
  }
}
