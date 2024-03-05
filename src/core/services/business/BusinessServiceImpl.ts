import { getMongoObjectId } from "../../../db/utils";
import { MediaUrl } from "../../models/MediaUrl";
import { Business } from "../../models/business/Business";
import { BusinessQuery } from "../../models/business/BusinessQuery";
import { BusinessWebUpdateSpec } from "../../models/business/BusinessWebUpdateSpec";
import { BusinessWebCreateSpec } from "../../models/business/BusinessWebCreateSpec";
import { BusinessesRepository } from "../../repositories/BusinessRespository";
import { ObjectStorage } from "../ObjectStorage";
import { BusinessService } from "./BusinessService";

export class BusinessServiceImpl implements BusinessService {
  businessRepo: BusinessesRepository;
  objectStorage: ObjectStorage;

  constructor(
    businessRepo: BusinessesRepository,
    objectStorage: ObjectStorage
  ) {
    this.businessRepo = businessRepo;
    this.objectStorage = objectStorage;
  }

  async create(business: BusinessWebCreateSpec): Promise<undefined> {
    const { mediaFiles, ...rest } = business;
    const id = getMongoObjectId();
    const mediaUrls: MediaUrl[] = await this.objectStorage.storeFiles(
      id,
      mediaFiles
    );
    await this.businessRepo.create({ id, mediaUrls, ...rest });
  }

  async getById(id: string): Promise<Business | null> {
    return await this.businessRepo.getById(id);
  }

  async getAll(query: BusinessQuery): Promise<Business[]> {
    return await this.businessRepo.getAll(query);
  }

  async update(
    id: string,
    business: BusinessWebUpdateSpec
  ): Promise<undefined> {
    const { mediaFiles, ...rest } = business;
    const mediaUrls: MediaUrl[] = await this.objectStorage.storeFiles(
      id,
      mediaFiles
    );
    await this.businessRepo.update(id, {
      ...rest,
      mediaUrls: [...rest.mediaUrls, ...mediaUrls],
    });
  }

  async delete(id: string): Promise<undefined> {
    await this.businessRepo.delete(id);
  }
}
