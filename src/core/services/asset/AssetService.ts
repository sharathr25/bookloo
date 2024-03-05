import { Asset } from "../../models/asset/Asset";
import { AssetQuery } from "../../models/asset/AssetQuery";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";
import { AssetWebCreateSpec } from "../../models/asset/AssetWebCreateSpec";

export interface AssetService {
  create(asset: AssetWebCreateSpec): Promise<undefined>;
  getById(id: string): Promise<Asset | null>;
  getAll(query: AssetQuery): Promise<Asset[]>;
  update(id: string, asset: AssetUpdateSpec): Promise<undefined>;
  delete(id: string): Promise<undefined>;
}
