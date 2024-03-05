import { Feature } from "../Feature";
import { Location } from "../Location";
import { Media } from "../Media";
import { BusinessEnum } from "./BusinessEnum";

export class BusinessCreateSpec {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  mediaFiles: File[];
  mediaUrls: Media[];
  features: Feature[];
  stars?: number;
  type: BusinessEnum;

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
    mediaFiles,
    features,
    stars,
    type,
    mediaUrls,
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
    mediaFiles: File[];
    mediaUrls: Media[];
    features: Feature[];
    stars?: number;
    type: BusinessEnum;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.city = city;
    this.address = address;
    this.state = state;
    this.country = country;
    this.pincode = pincode;
    this.location = location;
    this.mediaFiles = mediaFiles;
    this.mediaUrls = mediaUrls;
    this.features = features;
    this.stars = stars;
    this.type = type;
  }
}
