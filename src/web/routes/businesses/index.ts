import Elysia, { t } from "elysia";
import { businessService } from "../../../core/services/business";
import { BusinessRoutesHandler } from "./BusinessRoutesHandler";
import { BusinessCreateSpec } from "../../models/business/BusinessCreateSpec";
import { BusinessQuerySpec } from "../../models/business/BusinessQuerySpec";
import { Businesses } from "../../models/business/Businesses";
import { IdSpec } from "../../models/IdSpec";
import { Business } from "../../models/business/Business";
import { BusinessUpdateSpec } from "../../models/business/BusinessUpdateSpec";

export const businessRoutesHandler = new BusinessRoutesHandler(businessService);

export const businessRoutes = new Elysia().group("/businesses", (app) =>
  app
    .post("/", businessRoutesHandler.create.bind(businessRoutesHandler), {
      body: BusinessCreateSpec,
    })
    .get("/", businessRoutesHandler.getAll.bind(businessRoutesHandler), {
      query: BusinessQuerySpec,
      response: Businesses,
    })
    .get("/:id", businessRoutesHandler.getOne.bind(businessRoutesHandler), {
      params: IdSpec,
      response: { 200: Business, 404: t.Null() },
    })
    .put("/:id", businessRoutesHandler.update.bind(businessRoutesHandler), {
      body: BusinessUpdateSpec,
      params: IdSpec,
    })
    .delete("/:id", businessRoutesHandler.delete.bind(businessRoutesHandler), {
      params: IdSpec,
    })
);
