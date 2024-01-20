import Elysia from "elysia";
import {
  hotelCreateSpec,
  hotelIdSpec,
  hotelQuerySpec,
  hotelUpdateSpec,
} from "../../models/hotels";

export default new Elysia().group("/hotels", (app) =>
  app
    .post("/", () => "create hotel", { body: hotelCreateSpec })
    .get("/", () => "get all", { query: hotelQuerySpec })
    .get("/:id", () => "get one", { params: hotelIdSpec })
    .put("/:id", () => "update hotel", {
      body: hotelUpdateSpec,
      params: hotelIdSpec,
    })
    .delete("/:id", () => "delete hotel", { params: hotelIdSpec })
);
