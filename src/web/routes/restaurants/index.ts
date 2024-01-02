import Elysia from "elysia";

export default new Elysia().group("/restaurants", (app) =>
  app
    .get("/", () => "get all")
    .get("/:id", () => "get one")
    .post("/", () => "create hotel")
    .put("/:id", () => "update hotel")
    .delete("/:id", () => "delete hotel")
);
