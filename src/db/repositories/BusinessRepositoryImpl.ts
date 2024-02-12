import { Business } from "../../core/models/Business";
import { BusinessesRepository } from "../../core/repositories/BusinessRespository";

export class BusinessesRepositoryImpl implements BusinessesRepository {
  create(business: Business): undefined {
    throw new Error("Method not implemented.");
  }

  update(id: string, business: Business): undefined {
    throw new Error("Method not implemented.");
  }

  getOne(id: string): Business {
    throw new Error("Method not implemented.");
  }

  getAll(query: {}): [Business] {
    throw new Error("Method not implemented.");
  }

  delete(id: string): undefined {
    throw new Error("Method not implemented.");
  }
}
