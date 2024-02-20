import { Asset } from "../models/asset/Asset";
import { AssetCreateSpec } from "../models/asset/AssetCreateSpec";
import { AssetQuery } from "../models/asset/AssetQuery";
import { AssetUpdateSpec } from "../models/asset/AssetUpdateSpec";

export interface AssetRepository {
  create(asset: AssetCreateSpec): Promise<undefined>;
  update(id: string, asset: AssetUpdateSpec): Promise<undefined>;
  getById(id: string): Promise<Asset | null>;
  getAll(query: AssetQuery): Promise<Asset[]>;
  delete(id: string): Promise<undefined>;
}
