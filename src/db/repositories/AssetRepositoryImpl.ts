import { Asset } from "../../core/models/asset/Asset";
import { AssetCreateSpec } from "../../core/models/asset/AssetCreateSpec";
import { AssetQuery } from "../../core/models/asset/AssetQuery";
import { AssetUpdateSpec } from "../../core/models/asset/AssetUpdateSpec";
import { AssetRepository } from "../../core/repositories/AssetRepository";
import { AssetModel } from "../models/Asset";
import { BusinessModel } from "../models/Business";

export class AssetRepositoryImpl implements AssetRepository {
  async create(asset: AssetCreateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    await new AssetModel(rest).save();
  }

  async update(id: string, asset: AssetUpdateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    await BusinessModel.updateOne(rest, { _id: id });
  }

  async getById(id: string): Promise<Asset | null> {
    return await AssetModel.findById(id);
  }

  async getAll(query: AssetQuery): Promise<Asset[]> {
    const { businessId, price, discount, type, currency, capacity } = query;

    const aggregate = BusinessModel.aggregate();

    aggregate.match({});
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
