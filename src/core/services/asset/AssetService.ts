import { Asset } from "../../models/Asset";
import { AssetQuery } from "../../models/AssetQuery";

export interface AssetService {
  create(asset: Asset): undefined;
  getById(id: String): Asset;
  getAll(query: AssetQuery): Asset;
  update(id: String, hotel: Asset): undefined;
  delete(id: String): undefined;
}
