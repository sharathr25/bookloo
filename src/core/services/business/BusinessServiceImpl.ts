import { Business } from "../../models/business/Business";
import { BusinessCreateSpec } from "../../models/business/BusinessCreateSpec";
import { BusinessQuery } from "../../models/business/BusinessQuery";
import { BusinessUpdateSpec } from "../../models/business/BusinessUpdateSpec";
import { BusinessesRepository } from "../../repositories/BusinessRespository";
import { BusinessService } from "./BusinessService";

export class BusinessServiceImpl implements BusinessService {
  businessRepo: BusinessesRepository;

  constructor(businessRepo: BusinessesRepository) {
    this.businessRepo = businessRepo;
  }

  async create(business: BusinessCreateSpec): Promise<undefined> {
    await this.businessRepo.create(business);
  }

  async getById(id: string): Promise<Business | null> {
    return await this.businessRepo.getById(id);
  }

  async getAll(query: BusinessQuery): Promise<Business[]> {
    return await this.businessRepo.getAll(query);
  }

  async update(id: string, business: BusinessUpdateSpec): Promise<undefined> {
    await this.businessRepo.update(id, business);
  }

  async delete(id: string): Promise<undefined> {
    await this.businessRepo.delete(id);
  }
}
