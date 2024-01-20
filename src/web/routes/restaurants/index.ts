import Elysia from "elysia";
import {
  restaurantCreateSpec,
  restaurantIdSpec,
  restaurantQuerySpec,
  restaurantUpdateSpec,
} from "../../models/restaurants";

export default new Elysia().group("/restaurants", (app) =>
  app
    .get("/", () => "get all", { query: restaurantQuerySpec })
    .get("/:id", () => "get one", { params: restaurantIdSpec })
    .post("/", () => "create hotel", { body: restaurantCreateSpec })
    .put("/:id", () => "update hotel", {
      params: restaurantIdSpec,
      body: restaurantUpdateSpec,
    })
    .delete("/:id", () => "delete hotel", { params: restaurantIdSpec })
);
