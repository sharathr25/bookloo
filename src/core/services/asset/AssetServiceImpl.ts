import { getMongoObjectId } from "../../../db/utils";
import { Media } from "../../models/Media";
import { Asset } from "../../models/asset/Asset";
import { AssetCreateSpec } from "../../models/asset/AssetCreateSpec";
import { AssetQuery } from "../../models/asset/AssetQuery";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";
import { AssetRepository } from "../../repositories/AssetRepository";
import { ObjectStorage } from "../ObjectStorage";
import { AssetService } from "./AssetService";

export class AssetServiceImpl implements AssetService {
  assetRepository: AssetRepository;
  objectStorage: ObjectStorage;

  constructor(assetRepository: AssetRepository, objectStorage: ObjectStorage) {
    this.assetRepository = assetRepository;
    this.objectStorage = objectStorage;
  }

  async create(asset: AssetCreateSpec): Promise<undefined> {
    const { mediaFiles } = asset;
    const id = getMongoObjectId();
    const mediaUrls: Media[] = await this.objectStorage.storeFiles(
      `${asset.businessId}/assets/${asset.id}`,
      mediaFiles
    );
    asset.id = id;
    asset.mediaUrls = mediaUrls;
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
