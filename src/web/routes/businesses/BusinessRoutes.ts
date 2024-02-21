import Elysia, { t } from "elysia";
import { BusinessService } from "../../../core/services/business/BusinessService";
import { BusinessMapper } from "../../mappers/BusinessMapper";
import {
  BusinessCreateSpec,
  BusinessCreateSpecType,
} from "../../models/business/BusinessCreateSpec";
import {
  BusinessQuerySpec,
  BusinessQuerySpecType,
} from "../../models/business/BusinessQuerySpec";
import { IdSpec, IdSpecType } from "../../models/IdSpec";
import {
  BusinessUpdateSpec,
  BusinessUpdateSpecType,
} from "../../models/business/BusinessUpdateSpec";
import { Business } from "../../models/business/Business";
import { Business as BusinessCore } from "../../../core/models/business/Business";
import { Businesses } from "../../models/business/Businesses";
import { AssetService } from "../../../core/services/asset/AssetService";
import { Assets } from "../../models/asset/Assets";
import { AssetMapper } from "../../mappers/AssetMapper";

export class BusinessRoutes {
  businessService: BusinessService;
  assetService: AssetService;

  constructor(businessService: BusinessService, assetService: AssetService) {
    this.businessService = businessService;
    this.assetService = assetService;
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

  async getAssets({ params }: { params: IdSpecType }) {
    return (await this.assetService.getAll({ businessId: params.id })).map(
      AssetMapper.map
    );
  }

  async delete({ params }: { params: IdSpecType }) {
    await this.businessService.delete(params.id);
  }

  get() {
    return new Elysia().group("/businesses", (app) =>
      app
        .post("/", this.create, {
          body: BusinessCreateSpec,
        })
        .get("/", this.getAll, {
          query: BusinessQuerySpec,
          response: Businesses,
        })
        .get("/:id", this.getOne, {
          params: IdSpec,
          response: { 200: Business, 404: t.Null() },
        })
        .get("/:id/assets", this.getAssets, {
          params: IdSpec,
          response: Assets,
        })
        .put("/:id", this.update, {
          body: BusinessUpdateSpec,
          params: IdSpec,
        })
        .delete("/:id", this.delete, { params: IdSpec })
    );
  }
}
