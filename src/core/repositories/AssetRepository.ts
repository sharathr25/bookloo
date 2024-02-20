import { Asset } from "../models/asset/Asset";
import { AssetQuery } from "../models/asset/AssetQuery";

export interface AssetRepository {
  create(asset: Asset): Promise<undefined>;
  update(id: string, asset: Asset): Promise<undefined>;
  getById(id: string): Promise<Asset | null>;
  getAll(query: AssetQuery): Promise<Asset[]>;
  delete(id: string): Promise<undefined>;
}
