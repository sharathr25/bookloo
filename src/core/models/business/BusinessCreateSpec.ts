import { Feature } from "../Feature";
import { Location } from "../Location";
import { MediaUrl } from "../MediaUrl";
import { BusinessEnum } from "./BusinessEnum";

export type BusinessCreateSpec = {
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
  mediaUrls: MediaUrl[];
  features: Feature[];
  stars?: number;
  type: BusinessEnum;
};
