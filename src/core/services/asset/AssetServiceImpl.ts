import { Asset } from "../../models/asset/Asset";
import { AssetQuery } from "../../models/asset/AssetQuery";
import { AssetRepository } from "../../repositories/AssetRepository";
import { AssetService } from "./AssetService";

export class AssetServiceImpl implements AssetService {
  assetRepository: AssetRepository;

  constructor(assetRepository: AssetRepository) {
    this.assetRepository = assetRepository;
  }

  create(asset: Asset): undefined {
    throw new Error("Method not implemented.");
  }
  getById(id: String): Asset {
    throw new Error("Method not implemented.");
  }
  getAll(query: AssetQuery): Asset {
    throw new Error("Method not implemented.");
  }
  update(id: String, hotel: Asset): undefined {
    throw new Error("Method not implemented.");
  }

  delete(id: String): undefined {
    throw new Error("Method not implemented.");
  }
}
