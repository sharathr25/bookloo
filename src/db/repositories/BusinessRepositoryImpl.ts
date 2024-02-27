import { KM_IN_METERS } from "../../core/constants";
import { Business } from "../../core/models/business/Business";
import { BusinessCreateSpec } from "../../core/models/business/BusinessCreateSpec";
import { BusinessQuery } from "../../core/models/business/BusinessQuery";
import { BusinessUpdateSpec } from "../../core/models/business/BusinessUpdateSpec";
import { BusinessesRepository } from "../../core/repositories/BusinessRespository";
import { BusinessMapper } from "../mappers/BusinessMapper";
import { BusinessModel } from "../models/Business";

export class BusinessesRepositoryImpl implements BusinessesRepository {
  async create(business: BusinessCreateSpec): Promise<undefined> {
    const { mediaFiles, location, ...rest } = business;

    await new BusinessModel({
      ...rest,
      location: {
        type: "Point",
        coordinates: [location.longitude, location.latitude],
      },
    }).save();
  }

  async update(id: string, business: BusinessUpdateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = business;
    await BusinessModel.updateOne(rest, { _id: id });
  }

  async getById(id: string): Promise<Business | null> {
    const business = await BusinessModel.findById(id);
    return business ? BusinessMapper.toCore(business?.toObject()) : null;
  }

  async getAll(query: BusinessQuery): Promise<Business[]> {
    const {
      name,
      address,
      city,
      stars,
      state,
      country,
      pincode,
      rating,
      type,
      location,
    } = query;

    const aggregate = BusinessModel.aggregate();

    aggregate.match({});
    if (name) aggregate.match({ name });
    if (type) aggregate.match({ type });
    if (city) aggregate.match({ city });
    if (state) aggregate.match({ state });
    if (country) aggregate.match({ country });
    if (pincode) aggregate.match({ pincode });
    if (stars) aggregate.match({ stars: { $gte: stars } });
    if (rating) aggregate.match({ rating: { $gte: stars } });
    if (address)
      aggregate.search({
        text: {
          query: address,
          path: "address",
        },
      });
    if (location)
      aggregate.near({
        near: {
          type: "Point",
          coordinates: [location.latitude, location.longitude],
        },
        distanceField: "dist.calculated",
        maxDistance: KM_IN_METERS,
        spherical: true,
      });

    const businesses = await aggregate.exec();
    return businesses.map(BusinessMapper.toCore);
  }

  async delete(id: string): Promise<undefined> {
    await BusinessModel.deleteOne({ _id: id });
  }
}
