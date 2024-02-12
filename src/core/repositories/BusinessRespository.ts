import { Business } from "../models/Business";

export interface BusinessesRepository {
  create(business: Business): undefined;
  update(id: string, business: Business): undefined;
  getOne(id: string): Business;
  getAll(query: {}): [Business];
  delete(id: string): undefined;
}
