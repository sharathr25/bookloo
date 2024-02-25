import { Location } from "../../core/models/Location";
import { Business } from "../../core/models/business/Business";
import { BusinessEnum } from "../../core/models/business/BusinessEnum";
import { BusinessType } from "../models/Business";
import { MediaUrlMapper } from "./MediaUrlMapper";

export class BusinessMapper {
  static map(business: BusinessType): Business {
    const {
      _id,
      location,
      rating,
      numberOfRatings,
      stars,
      type,
      mediaUrls,
      ...rest
    } = business;
    const [longitude, latitude] = location.coordinates;

    return new Business({
      id: _id,
      rating: rating || undefined,
      numberOfRatings: numberOfRatings || undefined,
      stars: stars || undefined,
      type: BusinessEnum.HOTEL,
      location: new Location({ longitude, latitude }),
      mediaUrls: mediaUrls.map(MediaUrlMapper.map),
      ...rest,
    });
  }
}
