import { Business } from "../../core/models/Business";
import { LocationType } from "../models/Location";
import { MediaUrlType } from "../models/MediaUrl";
import { BusinessType } from "../models/business/Business";
import { FeatureType } from "../models/business/Feature";

export class BusinessMapper {
  static mapFeature(feature: FeatureType): Feature {
    const { name, description, price, discount, currency, category } = feature;
    return new Feature({
      name,
      description,
      price,
      discount,
      category,
      currency,
    });
  }

  static mapMediaUrl(mediaUrl: MediaUrlType): Media {
    const { type, url } = mediaUrl;
    return new Media({
      type,
      url,
    });
  }

  static mapLocation(location: LocationType): Location {
    const { latitude, longitude } = location;
    return new Location({ latitude, longitude });
  }

  static map(business: BusinessType): Business {
    const { location, features } = business;
    return new Business({
      ...business,
      location: BusinessMapper.mapLocation(location),
      features: features.map(BusinessMapper.mapFeature),
    });
  }
}
