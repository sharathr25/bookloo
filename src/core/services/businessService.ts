import { Business } from "../models/Business";

export class BusinessService {
  createBusiness = (hotel: Business) => {
    console.log(hotel, "create Business");
  };

  getBusiness = (id: String) => {
    console.log(id, "get Business");
  };

  updateBusiness = (id: String, hotel: Business) => {
    console.log(id, hotel, "update Business");
  };

  deleteBusiness = (id: String) => {
    console.log(id, "delete Business");
  };
}
