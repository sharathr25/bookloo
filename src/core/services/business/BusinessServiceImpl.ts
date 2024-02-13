import { Business } from "../../models/Business";
import { BusinessesRepository } from "../../repositories/BusinessRespository";
import { BusinessService } from "./BusinessService";

export class BusinessServiceImpl implements BusinessService {
  businessRepo: BusinessesRepository;

  constructor(businessRepo: BusinessesRepository) {
    this.businessRepo = businessRepo;
  }

  create(business: Business): undefined {
    throw new Error("Method not implemented.");
  }

  getById(id: String): Business {
    throw new Error("Method not implemented.");
  }

  getAll(query: {}): Business {
    throw new Error("Method not implemented.");
  }

  update(id: String, business: Business): undefined {
    throw new Error("Method not implemented.");
  }

  delete(id: String): undefined {
    throw new Error("Method not implemented.");
  }
}
