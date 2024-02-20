import { Asset } from "../../models/asset/Asset";
import { AssetCreateSpec } from "../../models/asset/AssetCreateSpec";
import { AssetQuery } from "../../models/asset/AssetQuery";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";

export interface AssetService {
  create(asset: AssetCreateSpec): Promise<undefined>;
  getById(id: string): Promise<Asset | null>;
  getAll(query: AssetQuery): Promise<Asset[]>;
  update(id: string, asset: AssetUpdateSpec): Promise<undefined>;
  delete(id: string): Promise<undefined>;
}
