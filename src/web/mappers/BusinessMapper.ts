import { Location } from "../../core/models/Location";
import { Business as BusinessCore } from "../../core/models/business/Business";
import { BusinessCreateSpec } from "../../core/models/business/BusinessCreateSpec";
import { BusinessEnum } from "../../core/models/business/BusinessEnum";
import { BusinessUpdateSpec } from "../../core/models/business/BusinessUpdateSpec";
import { LocationType } from "../models/Location";
import { BusinessCreateSpecType } from "../models/business/BusinessCreateSpec";
import { BusinessUpdateSpecType } from "../models/business/BusinessUpdateSpec";
import { BusinessType } from "../models/business/Business";
import { FeatureMapper } from "./FeatureMapper";
import { MediaUrlMapper } from "./MediaUrlMapper";

export class BusinessMapper {
  static mapLocation(location: LocationType): Location {
    const { latitude, longitude } = location;
    return new Location({ latitude, longitude });
  }

  static mapCreateSpec(business: BusinessCreateSpecType): BusinessCreateSpec {
    const { location, features, type, ...rest } = business;

    return new BusinessCreateSpec({
      ...rest,
      type: BusinessEnum[type],
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.map),
    });
  }

  static mapUpdateSpec(business: BusinessUpdateSpecType): BusinessUpdateSpec {
    const { location, features, type, ...rest } = business;
    return new BusinessUpdateSpec({
      ...rest,
      type: BusinessEnum[type],
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.map),
    });
  }

  static map(business: BusinessCore): BusinessType {
    const { mediaUrls, ...rest } = business;
    return { ...rest, mediaUrls: mediaUrls.map(MediaUrlMapper.toRest) };
  }
}
