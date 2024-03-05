import { Asset } from "../../core/models/asset/Asset";
import { AssetDbCreateSpec } from "../../core/models/asset/AssetDbCreateSpec";
import { AssetQuery } from "../../core/models/asset/AssetQuery";
import { AssetBaseUpdateSpec } from "../../core/models/asset/AssetBaseUpdateSpec";
import { AssetRepository } from "../../core/repositories/AssetRepository";
import { AssetMapper } from "../mappers/AssetMapper";
import { AssetModel } from "../models/Asset";

export class AssetRepositoryImpl implements AssetRepository {
  async create(asset: AssetDbCreateSpec): Promise<undefined> {
    await new AssetModel(asset).save();
  }

  async update(id: string, asset: AssetBaseUpdateSpec): Promise<undefined> {
    await AssetModel.findByIdAndUpdate(id, asset);
  }

  async getById(id: string): Promise<Asset | null> {
    const asset = await AssetModel.findById(id);
    return asset ? AssetMapper.toCore(asset.toObject()) : null;
  }

  async getAll(query: AssetQuery): Promise<Asset[]> {
    const { businessId, price, discount, type, currency, capacity } = query;

    const aggregate = AssetModel.aggregate();

    aggregate.match({});
    if (businessId) aggregate.match({ businessId });
    if (type) aggregate.match({ type });
    if (currency) aggregate.match({ currency });
    if (capacity) aggregate.match({ capacity });
    if (price) aggregate.match({ price });
    if (discount) aggregate.match({ discount: { $gte: discount } });

    const assets = await aggregate.exec();
    return assets.map(AssetMapper.toCore);
  }

  async delete(id: string): Promise<undefined> {
    await AssetModel.deleteOne({ _id: id });
  }
}
