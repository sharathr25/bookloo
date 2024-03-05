import { Feature } from "../Feature";
import { Location } from "../Location";
import { MediaUrl } from "../MediaUrl";
import { BusinessEnum } from "./BusinessEnum";

export type Business = {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  mediaUrls: MediaUrl[];
  features: Feature[];
  type: BusinessEnum;
  rating?: number;
  numberOfRatings?: number;
  stars?: number;
  distance?: number;
};
