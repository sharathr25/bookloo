import Elysia from "elysia";
import {
  hostelCreateSpec,
  hostelIdSpec,
  hostelQuerySpec,
  hostelUpdateSpec,
} from "../../models/hostels";

export default new Elysia().group("/hostels", (app) =>
  app
    .post("/", () => "create hotel", { body: hostelCreateSpec })
    .get("/", () => "get all", { query: hostelQuerySpec })
    .get("/:id", () => "get one", { params: hostelIdSpec })
    .put("/:id", () => "update hotel", {
      body: hostelUpdateSpec,
      params: hostelIdSpec,
    })
    .delete("/:id", () => "delete hotel", { params: hostelIdSpec })
);
