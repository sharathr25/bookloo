import Elysia from "elysia";

export class UserRoutes {
  get() {
    return new Elysia().group("/users", (app) =>
      app
        .get("/sign-in", () => "get all")
        .get("/sign-up", () => "get one")
        .post("/sign-out", () => "create hotel")
    );
  }
}
