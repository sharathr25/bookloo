import Elysia from "elysia";
import { businessQuerySpec, businessSpec, idSpec } from "../../models/common";

export default new Elysia().group("/businesses", (app) =>
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
