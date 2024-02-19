import { Business } from "../../models/Business";
import { BusinessQuery } from "../../models/BusinessQuery";

export interface BusinessService {
  create(business: Business): undefined;
  getById(id: String): Business;
  getAll(query: BusinessQuery): Business;
  update(id: String, hotel: Business): undefined;
  delete(id: String): undefined;
}
