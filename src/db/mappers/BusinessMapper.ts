import { Business } from "../../core/models/business/Business";
import { BusinessEnum } from "../../core/models/business/BusinessEnum";
import { BusinessType } from "../models/Business";
import { MediaUrlMapper } from "./MediaUrlMapper";

export class BusinessMapper {
  static toCore(business: BusinessType): Business {
    const {
      _id,
      location,
      rating,
      numberOfRatings,
      stars,
      type,
      mediaUrls,
      __v,
      ...rest
    } = business;
    const [longitude, latitude] = location.coordinates;

    return {
      id: _id.toString(),
      rating: rating || undefined,
      numberOfRatings: numberOfRatings || undefined,
      stars: stars || undefined,
      type: BusinessEnum[type as keyof typeof BusinessEnum],
      location: { longitude, latitude },
      mediaUrls: mediaUrls.map(MediaUrlMapper.toCore),
      ...rest,
    };
  }
}
