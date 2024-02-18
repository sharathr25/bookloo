import { Business } from "../models/Business";

export interface BusinessesRepository {
  create(business: Business): Promise<undefined>;
  update(id: string, business: Business): Promise<undefined>;
  getById(id: string): Promise<Business | null>;
  getAll(query: {}): Promise<Business[]>;
  delete(id: string): Promise<undefined>;
}
