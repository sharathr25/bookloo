import Elysia from "elysia";
import { BusinessService } from "../../../core/services/business/BusinessService";
import { BusinessMapper } from "../../mappers/BusinessMapper";
import { BusinessCreateSpec } from "../../models/business/BusinessCreateSpec";
import { BusinessQuerySpec } from "../../models/business/BusinessQuerySpec";
import { IdSpec } from "../../models/IdSpec";
import { BusinessUpdateSpec } from "../../models/business/BusinessUpdateSpec";

export class BusinessRoutes {
  businessService: BusinessService;

  constructor(businessService: BusinessService) {
    this.businessService = businessService;
  }

  get() {
    return new Elysia().group("/businesses", (app) =>
      app
        .post(
          "/",
          ({ body }) => this.businessService.create(BusinessMapper.map(body)),
          {
            body: BusinessCreateSpec,
          }
        )
        .get("/", ({ query }) => this.businessService.getAll(query), {
          query: BusinessQuerySpec,
        })
        .get("/:id", ({ params }) => this.businessService.getById(params.id), {
          params: IdSpec,
        })
        .put(
          "/:id",
          ({ params, body }) =>
            this.businessService.update(params.id, BusinessMapper.map(body)),
          {
            body: BusinessUpdateSpec,
            params: IdSpec,
          }
        )
        .delete(
          "/:id",
          ({ params }) => this.businessService.delete(params.id),
          { params: IdSpec }
        )
    );
  }
}
