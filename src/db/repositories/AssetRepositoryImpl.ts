import { Asset } from "../../core/models/asset/Asset";
import { AssetCreateSpec } from "../../core/models/asset/AssetCreateSpec";
import { AssetQuery } from "../../core/models/asset/AssetQuery";
import { AssetUpdateSpec } from "../../core/models/asset/AssetUpdateSpec";
import { AssetRepository } from "../../core/repositories/AssetRepository";
import { AssetMapper } from "../mappers/AssetMapper";
import { AssetModel } from "../models/Asset";

export class AssetRepositoryImpl implements AssetRepository {
  async create(asset: AssetCreateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    await new AssetModel(rest).save();
  }

  async update(id: string, asset: AssetUpdateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    await AssetModel.updateOne(rest, { _id: id });
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
