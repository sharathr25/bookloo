import { Business } from "../../models/business/Business";
import { BusinessQuery } from "../../models/business/BusinessQuery";

export interface BusinessService {
  create(business: Business): undefined;
  getById(id: String): Business;
  getAll(query: BusinessQuery): Business;
  update(id: String, hotel: Business): undefined;
  delete(id: String): undefined;
}
