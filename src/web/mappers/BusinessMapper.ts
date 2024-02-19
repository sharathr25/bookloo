import { Business } from "../../core/models/Business";
import { LocationType } from "../models/Location";
import { BusinessType } from "../models/business/Business";
import { FeatureMapper } from "./FeatureMapper";

export class BusinessMapper {
  static mapLocation(location: LocationType): Location {
    const { latitude, longitude } = location;
    return new Location({ latitude, longitude });
  }

  static map(business: BusinessType): Business {
    const { location, features } = business;
    return new Business({
      ...business,
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.map),
    });
  }
}
