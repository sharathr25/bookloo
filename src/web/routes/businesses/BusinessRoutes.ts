import Elysia from "elysia";
import { BusinessService } from "../../../core/services/business/BusinessService";
import { businessQuerySpec, businessSpec, idSpec } from "../../models/common";

export class BusinessRoutes {
  businessService: BusinessService;

  constructor(businessService: BusinessService) {
    this.businessService = businessService;
  }

  get() {
    return new Elysia().group("/businesses", (app) =>
      app
        .post("/", () => "create", { body: businessSpec })
        .get("/", () => "get all", { query: businessQuerySpec })
        .get("/:id", () => "get one", { params: idSpec })
        .put("/:id", () => "update", {
          body: businessSpec,
          params: idSpec,
        })
        .delete("/:id", () => "delete", { params: idSpec })
    );
  }
}
