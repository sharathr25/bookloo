import { Asset } from "../../core/models/Asset";
import { AssetQuery } from "../../core/models/AssetQuery";
import { AssetRepository } from "../../core/repositories/AssetRepository";
import { AssetModel } from "../models/Asset";
import { BusinessModel } from "../models/Business";

export class AssetRepositoryImpl implements AssetRepository {
  static KM_IN_METERS = 1000;

  async create(asset: Asset): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    await new AssetModel(rest).save();
  }

  async update(id: string, asset: Asset): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    await BusinessModel.updateOne(rest, { _id: id });
  }

  async getById(id: string): Promise<Asset | null> {
    return await AssetModel.findById(id);
  }

  async getAll(query: AssetQuery): Promise<Asset[]> {
    const { businessId, price, discount, type, currency, capacity } = query;

    const aggregate = BusinessModel.aggregate();

    if (businessId) aggregate.match({ businessId });
    if (type) aggregate.match({ type });
    if (currency) aggregate.match({ currency });
    if (capacity) aggregate.match({ capacity });
    if (price) aggregate.match({ price });
    if (discount) aggregate.match({ discount: { $gte: discount } });

    return aggregate.exec();
  }

  async delete(id: string): Promise<undefined> {
    await BusinessModel.deleteOne({ _id: id });
  }
}
