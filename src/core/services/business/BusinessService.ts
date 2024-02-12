import { Business } from "../../models/Business";

export interface BusinessService {
  create(hotel: Business): undefined;
  getOne(id: String): Business;
  getAll(query: {}): Business;
  update(id: String, hotel: Business): undefined;
  delete(id: String): undefined;
}