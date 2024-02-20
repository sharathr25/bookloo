import { Business as BusinessCore } from "../../core/models/business/Business";
import { BusinessCreateSpec } from "../../core/models/business/BusinessCreateSpec";
import { BusinessUpdateSpec } from "../../core/models/business/BusinessUpdateSpec";
import { LocationType } from "../models/Location";
import { BusinessType } from "../models/business/Business";
import { BusinessCreateSpecType } from "../models/business/BusinessCreateSpec";
import { BusinessUpdateSpecType } from "../models/business/BusinessUpdateSpec";
import { FeatureMapper } from "./FeatureMapper";

export class BusinessMapper {
  static mapLocation(location: LocationType): Location {
    const { latitude, longitude } = location;
    return new Location({ latitude, longitude });
  }

  static mapCreateSpec(business: BusinessCreateSpecType): BusinessCreateSpec {
    const { location, features } = business;
    return new BusinessCreateSpec({
      ...business,
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.map),
    });
  }

  static mapUpdateSpec(business: BusinessUpdateSpecType): BusinessUpdateSpec {
    const { location, features } = business;
    return new BusinessUpdateSpec({
      ...business,
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.map),
    });
  }

  static map(business: BusinessCore): BusinessType {
    return { ...business };
  }
}
