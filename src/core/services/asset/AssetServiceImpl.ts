import { getMongoObjectId } from "../../../db/utils";
import { MediaUrl } from "../../models/MediaUrl";
import { Asset } from "../../models/asset/Asset";
import { AssetQuery } from "../../models/asset/AssetQuery";
import { AssetWebUpdateSpec } from "../../models/asset/AssetWebUpdateSpec";
import { AssetWebCreateSpec } from "../../models/asset/AssetWebCreateSpec";
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

  async create(asset: AssetWebCreateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    const id = getMongoObjectId();
    const mediaUrls: MediaUrl[] = await this.objectStorage.storeFiles(
      `${asset.businessId}/assets/${id}`,
      mediaFiles
    );
    await this.assetRepository.create({ id, mediaUrls, ...rest });
  }

  async getById(id: string): Promise<Asset | null> {
    return await this.assetRepository.getById(id);
  }

  async getAll(query: AssetQuery): Promise<Asset[]> {
    return await this.assetRepository.getAll(query);
  }

  async update(id: string, asset: AssetWebUpdateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = asset;
    const mediaUrls: MediaUrl[] = await this.objectStorage.storeFiles(
      `${asset.businessId}/assets/${id}`,
      mediaFiles
    );
    await this.assetRepository.update(id, {
      ...rest,
      mediaUrls: [...asset.mediaUrls, ...mediaUrls],
    });
  }

  async delete(id: string): Promise<undefined> {
    await this.assetRepository.delete(id);
  }
}
