import { Business } from "../models/business/Business";
import { BusinessQuery } from "../models/business/BusinessQuery";

export interface BusinessesRepository {
  create(business: Business): Promise<undefined>;
  update(id: string, business: Business): Promise<undefined>;
  getById(id: string): Promise<Business | null>;
  getAll(query: BusinessQuery): Promise<Business[]>;
  delete(id: string): Promise<undefined>;
}
