import { Business } from "../../core/models/business/Business";
import { BusinessQuery } from "../../core/models/business/BusinessQuery";
import { BusinessesRepository } from "../../core/repositories/BusinessRespository";
import { BusinessModel } from "../models/Business";

export class BusinessesRepositoryImpl implements BusinessesRepository {
  static KM_IN_METERS = 1000;

  async create(business: Business): Promise<undefined> {
    const { mediaFiles, ...rest } = business;
    await new BusinessModel(rest).save();
  }

  async update(id: string, business: Business): Promise<undefined> {
    const { mediaFiles, ...rest } = business;
    await BusinessModel.updateOne(rest, { _id: id });
  }

  async getById(id: string): Promise<Business | null> {
    return await BusinessModel.findById(id);
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
        maxDistance: BusinessesRepositoryImpl.KM_IN_METERS,
        spherical: true,
      });
    return aggregate.exec();
  }

  async delete(id: string): Promise<undefined> {
    await BusinessModel.deleteOne({ _id: id });
  }
}
