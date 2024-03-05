import { Asset } from "../models/asset/Asset";
import { AssetDbCreateSpec } from "../models/asset/AssetDbCreateSpec";
import { AssetQuery } from "../models/asset/AssetQuery";
import { AssetDbUpdateSpec } from "../models/asset/AssetDbUpdateSpec";

export interface AssetRepository {
  create(asset: AssetDbCreateSpec): Promise<undefined>;
  update(id: string, asset: AssetDbUpdateSpec): Promise<undefined>;
  getById(id: string): Promise<Asset | null>;
  getAll(query: AssetQuery): Promise<Asset[]>;
  delete(id: string): Promise<undefined>;
}
