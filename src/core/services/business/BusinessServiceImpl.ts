import { getMongoObjectId } from "../../../db/utils";
import { Media } from "../../models/Media";
import { Business } from "../../models/business/Business";
import { BusinessCreateSpec } from "../../models/business/BusinessCreateSpec";
import { BusinessQuery } from "../../models/business/BusinessQuery";
import { BusinessUpdateSpec } from "../../models/business/BusinessUpdateSpec";
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

  async create(business: BusinessCreateSpec): Promise<undefined> {
    const { mediaFiles } = business;
    const id = getMongoObjectId();
    const mediaUrls: Media[] = await this.objectStorage.storeFiles(
      id,
      mediaFiles
    );
    business.id = id;
    business.mediaUrls = mediaUrls;
    await this.businessRepo.create(business);
  }

  async getById(id: string): Promise<Business | null> {
    return await this.businessRepo.getById(id);
  }

  async getAll(query: BusinessQuery): Promise<Business[]> {
    return await this.businessRepo.getAll(query);
  }

  async update(id: string, business: BusinessUpdateSpec): Promise<undefined> {
    const { mediaFiles } = business;
    const mediaUrls: Media[] = await this.objectStorage.storeFiles(
      id,
      mediaFiles
    );
    business.mediaUrls = [...business.mediaUrls, ...mediaUrls];
    await this.businessRepo.update(id, business);
  }

  async delete(id: string): Promise<undefined> {
    await this.businessRepo.delete(id);
  }
}
