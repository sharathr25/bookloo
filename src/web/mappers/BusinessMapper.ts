import { Location } from "../../core/models/Location";
import { Business as BusinessCore } from "../../core/models/business/Business";
import { BusinessWebCreateSpec } from "../../core/models/business/BusinessWebCreateSpec";
import { BusinessEnum } from "../../core/models/business/BusinessEnum";
import { BusinessWebUpdateSpec } from "../../core/models/business/BusinessWebUpdateSpec";
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
    return { latitude, longitude };
  }

  static mapCreateSpec(spec: BusinessCreateSpecType): BusinessWebCreateSpec {
    const { data, files }: { data: string; files: File[] } = spec;
    const business: BusinessCreateDataSpecType = JSON.parse(data);
    const { location, features, type, ...rest } = business;
    return {
      ...rest,
      type: BusinessEnum[type],
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.toCore),
      mediaFiles: files,
    };
  }

  static mapUpdateSpec(spec: BusinessUpdateSpecType): BusinessWebUpdateSpec {
    const { data, files }: { data: string; files: File[] } = spec;
    const business: BusinessUpdateDataSpecType = JSON.parse(data);
    const { location, features, type, ...rest } = business;
    return {
      ...rest,
      type: BusinessEnum[type],
      location: BusinessMapper.mapLocation(location),
      features: features.map(FeatureMapper.toCore),
      mediaFiles: files,
    };
  }

  static toRest(business: BusinessCore): BusinessType {
    const { mediaUrls, ...rest } = business;
    return { ...rest, mediaUrls: mediaUrls.map(MediaUrlMapper.toRest) };
  }
}
