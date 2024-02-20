import { Business } from "../../models/business/Business";
import { BusinessCreateSpec } from "../../models/business/BusinessCreateSpec";
import { BusinessQuery } from "../../models/business/BusinessQuery";
import { BusinessUpdateSpec } from "../../models/business/BusinessUpdateSpec";

export interface BusinessService {
  create(business: BusinessCreateSpec): Promise<undefined>;
  getById(id: string): Promise<Business | null>;
  getAll(query: BusinessQuery): Promise<Business[]>;
  update(id: string, business: BusinessUpdateSpec): Promise<undefined>;
  delete(id: string): Promise<undefined>;
}
