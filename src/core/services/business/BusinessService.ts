import { Business } from "../../models/business/Business";
import { BusinessQuery } from "../../models/business/BusinessQuery";
import { BusinessWebUpdateSpec } from "../../models/business/BusinessWebUpdateSpec";
import { BusinessWebCreateSpec } from "../../models/business/BusinessWebCreateSpec";

export interface BusinessService {
  create(business: BusinessWebCreateSpec): Promise<undefined>;
  getById(id: string): Promise<Business | null>;
  getAll(query: BusinessQuery): Promise<Business[]>;
  update(id: string, business: BusinessWebUpdateSpec): Promise<undefined>;
  delete(id: string): Promise<undefined>;
}
