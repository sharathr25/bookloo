import Elysia, { t } from "elysia";
import { businessService } from "../../../core/services/business";
import { BusinessRoutesHandler } from "./BusinessRoutesHandler";
import { BusinessCreateSpec } from "../../models/business/BusinessCreateSpec";
import { BusinessQuerySpec } from "../../models/business/BusinessQuerySpec";
import { Businesses } from "../../models/business/Businesses";
import { Business } from "../../models/business/Business";
import { BusinessUpdateSpec } from "../../models/business/BusinessUpdateSpec";
import { BusinessIdSpec } from "../../models/business/BusinessIdSpec";

export const businessRoutesHandler = new BusinessRoutesHandler(businessService);

export const businessRoutes = new Elysia().group("/businesses", (app) =>
  app
    .post("/", businessRoutesHandler.create.bind(businessRoutesHandler), {
      body: BusinessCreateSpec,
    })
    .get(
      "/:businessId",
      businessRoutesHandler.getOne.bind(businessRoutesHandler),
      {
        params: BusinessIdSpec,
        response: { 200: Business, 404: t.Null() },
      }
    )
    .get("/", businessRoutesHandler.getAll.bind(businessRoutesHandler), {
      query: BusinessQuerySpec,
      response: Businesses,
    })
    .put(
      "/:businessId",
      businessRoutesHandler.update.bind(businessRoutesHandler),
      {
        body: BusinessUpdateSpec,
        params: BusinessIdSpec,
      }
    )
    .delete(
      "/:businessId",
      businessRoutesHandler.delete.bind(businessRoutesHandler),
      {
        params: BusinessIdSpec,
      }
    )
);
