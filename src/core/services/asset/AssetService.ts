import { Asset } from "../../models/asset/Asset";
import { AssetQuery } from "../../models/asset/AssetQuery";

export interface AssetService {
  create(asset: Asset): undefined;
  getById(id: String): Asset;
  getAll(query: AssetQuery): Asset;
  update(id: String, hotel: Asset): undefined;
  delete(id: String): undefined;
}
