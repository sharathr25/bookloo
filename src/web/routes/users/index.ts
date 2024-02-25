import Elysia from "elysia";
import { UserRoutesHandler } from "./UserRoutes";

export const userRoutes = new Elysia().group("/users", (app) =>
  app
    .get("/sign-in", () => "get all")
    .get("/sign-up", () => "get one")
    .post("/sign-out", () => "create hotel")
);
