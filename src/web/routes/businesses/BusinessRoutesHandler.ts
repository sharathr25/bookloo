import { BusinessService } from "../../../core/services/business/BusinessService";
import { BusinessMapper } from "../../mappers/BusinessMapper";
import { BusinessCreateSpecType } from "../../models/business/BusinessCreateSpec";
import { BusinessQuerySpecType } from "../../models/business/BusinessQuerySpec";
import { BusinessUpdateSpecType } from "../../models/business/BusinessUpdateSpec";
import { Business as BusinessCore } from "../../../core/models/business/Business";
import { BusinessIdSpecType } from "../../models/business/BusinessIdSpec";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../../../core/constants";

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
    params: BusinessIdSpecType;
    body: BusinessUpdateSpecType;
  }) {
    await this.businessService.update(
      params.businessId,
      BusinessMapper.mapUpdateSpec(body)
    );
  }

  async getAll({ query }: { query: BusinessQuerySpecType }) {
    const businesses: BusinessCore[] = await this.businessService.getAll({
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
      ...query,
    });
    return businesses.map(BusinessMapper.toRest);
  }

  async getOne({ params, set }: { params: BusinessIdSpecType; set: any }) {
    const business: BusinessCore | null = await this.businessService.getById(
      params.businessId
    );
    if (!business) {
      set.status = 404;
      return null;
    }
    return BusinessMapper.toRest(business);
  }

  async delete({ params }: { params: BusinessIdSpecType }) {
    await this.businessService.delete(params.businessId);
  }
}
