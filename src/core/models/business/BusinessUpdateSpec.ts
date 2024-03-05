import { Feature } from "../Feature";
import { Location } from "../Location";
import { MediaUrl } from "../MediaUrl";
import { BusinessEnum } from "./BusinessEnum";

export type BusinessUpdateSpec = {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  mediaUrls: MediaUrl[];
  mediaFiles: File[];
  features: Feature[];
  stars?: number;
  type: BusinessEnum;
};
