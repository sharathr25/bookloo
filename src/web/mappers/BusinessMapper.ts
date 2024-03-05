import { Location } from "../../core/models/Location";
import { Business as BusinessCore } from "../../core/models/business/Business";
import { BusinessCreateSpec } from "../../core/models/business/BusinessCreateSpec";
import { BusinessEnum } from "../../core/models/business/BusinessEnum";
import { BusinessUpdateSpec } from "../../core/models/business/BusinessUpdateSpec";
import { LocationType } from "../models/Location";
import {
  BusinessCreateDataSpecType,
  BusinessCreateSpecType,
} from "../models/business/BusinessCreateSpec";
import {
  BusinessUpdateDataSpecType,
  BusinessUpdateSpecType,
} from "../models/business/BusinessUpdateSpec";
import { BusinessType } from "../models/business/Business";
import { FeatureMapper } from "./FeatureMapper";
import { MediaUrlMapper } from "./MediaUrlMapper";

export class BusinessMapper {
  static mapLocation(location: LocationType): Location {
    const { latitude, longitude } = location;
    return new Location({ latitude, longitude });
  }

  static mapCreateSpec(spec: BusinessCreateSpecType): BusinessCreateSpec {
    const { data, files }: { data: string; files: File[] } = spec;
    const business: BusinessCreateDataSpecType = JSON.parse(data);
    const { location, features, type, ...rest } = business;
    return new BusinessCreateSpec({
      ...rest,
      type: BusinessEnum[type],
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.toCore),
      mediaFiles: files,
      id: "",
      mediaUrls: [],
    });
  }

  static mapUpdateSpec(spec: BusinessUpdateSpecType): BusinessUpdateSpec {
    const { data, files }: { data: string; files: File[] } = spec;
    const business: BusinessUpdateDataSpecType = JSON.parse(data);
    const { location, features, type, ...rest } = business;
    return new BusinessUpdateSpec({
      ...rest,
      type: BusinessEnum[type],
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.toCore),
      mediaFiles: files,
      mediaUrls: [],
    });
  }

  static toRest(business: BusinessCore): BusinessType {
    const { mediaUrls, ...rest } = business;
    return { ...rest, mediaUrls: mediaUrls.map(MediaUrlMapper.toRest) };
  }
}
