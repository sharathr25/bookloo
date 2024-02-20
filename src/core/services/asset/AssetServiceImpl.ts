import { Asset } from "../../models/asset/Asset";
import { AssetCreateSpec } from "../../models/asset/AssetCreateSpec";
import { AssetQuery } from "../../models/asset/AssetQuery";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";
import { AssetRepository } from "../../repositories/AssetRepository";
import { AssetService } from "./AssetService";

export class AssetServiceImpl implements AssetService {
  assetRepository: AssetRepository;

  constructor(assetRepository: AssetRepository) {
    this.assetRepository = assetRepository;
  }

  async create(asset: AssetCreateSpec): Promise<undefined> {
    await this.assetRepository.create(asset);
  }

  async getById(id: string): Promise<Asset | null> {
    return await this.assetRepository.getById(id);
  }

  async getAll(query: AssetQuery): Promise<Asset[]> {
    return await this.assetRepository.getAll(query);
  }

  async update(id: string, asset: AssetUpdateSpec): Promise<undefined> {
    await this.assetRepository.update(id, asset);
  }

  async delete(id: string): Promise<undefined> {
    await this.assetRepository.delete(id);
  }
}
