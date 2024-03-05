import { Feature } from "../Feature";
import { Location } from "../Location";
import { Media } from "../Media";
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
  mediaUrls: Media[];
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
    mediaUrls,
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
    mediaUrls: Media[];
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
    this.mediaUrls = mediaUrls;
    this.mediaFiles = mediaFiles;
    this.features = features;
    this.stars = stars;
    this.type = type;
  }
}
