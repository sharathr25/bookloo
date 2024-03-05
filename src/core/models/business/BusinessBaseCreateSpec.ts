import { Feature } from "../Feature";
import { Location } from "../Location";
import { BusinessEnum } from "./BusinessEnum";

export type BusinessBaseCreateSpec = {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  location: Location;
  features: Feature[];
  stars?: number;
  type: BusinessEnum;
};
