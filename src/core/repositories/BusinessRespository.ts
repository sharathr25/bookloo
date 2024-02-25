import { Business } from "../models/business/Business";
import { BusinessCreateSpec } from "../models/business/BusinessCreateSpec";
import { BusinessQuery } from "../models/business/BusinessQuery";
import { BusinessUpdateSpec } from "../models/business/BusinessUpdateSpec";

export interface BusinessesRepository {
  create(business: BusinessCreateSpec): Promise<undefined>;
  update(id: string, business: BusinessUpdateSpec): Promise<undefined>;
  getById(id: string): Promise<Business | null>;
  getAll(query: BusinessQuery): Promise<Business[]>;
  delete(id: string): Promise<undefined>;
}
