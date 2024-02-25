import { BusinessService } from "../../../core/services/business/BusinessService";
import { BusinessMapper } from "../../mappers/BusinessMapper";
import { BusinessCreateSpecType } from "../../models/business/BusinessCreateSpec";
import { BusinessQuerySpecType } from "../../models/business/BusinessQuerySpec";
import { IdSpecType } from "../../models/IdSpec";
import { BusinessUpdateSpecType } from "../../models/business/BusinessUpdateSpec";
import { Business as BusinessCore } from "../../../core/models/business/Business";

export class BusinessRoutesHandler {
  businessService: BusinessService;

  constructor(businessService: BusinessService) {
    this.businessService = businessService;
  }

  async create({ body }: { body: BusinessCreateSpecType }) {
    await this.businessService.create(BusinessMapper.mapCreateSpec(body));
  }

  async update({
    params,
    body,
  }: {
    params: IdSpecType;
    body: BusinessUpdateSpecType;
  }) {
    await this.businessService.update(
      params.id,
      BusinessMapper.mapUpdateSpec(body)
    );
  }

  async getAll({ query }: { query: BusinessQuerySpecType }) {
    const businesses: BusinessCore[] = await this.businessService.getAll(query);
    return businesses.map(BusinessMapper.map);
  }

  async getOne({ params, set }: { params: IdSpecType; set: any }) {
    const business: BusinessCore | null = await this.businessService.getById(
      params.id
    );
    if (!business) {
      set.status = 404;
      return null;
    }
    return BusinessMapper.map(business);
  }

  async delete({ params }: { params: IdSpecType }) {
    await this.businessService.delete(params.id);
  }
}
