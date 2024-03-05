import { Business } from "../models/business/Business";
import { BusinessDbCreateSpec } from "../models/business/BusinessDbCreateSpec";
import { BusinessQuery } from "../models/business/BusinessQuery";
import { BusinessDbUpdateSpec } from "../models/business/BusinessDbUpdateSpec";

export interface BusinessesRepository {
  create(business: BusinessDbCreateSpec): Promise<undefined>;
  update(id: string, business: BusinessDbUpdateSpec): Promise<undefined>;
  getById(id: string): Promise<Business | null>;
  getAll(query: BusinessQuery): Promise<Business[]>;
  delete(id: string): Promise<undefined>;
}
