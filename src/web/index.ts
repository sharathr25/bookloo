import { Elysia } from "elysia";
import { userRoutes } from "./routes/users";
import { businessRoutes } from "./routes/businesses";

const app = new Elysia()
  .use(userRoutes.get)
  .use(businessRoutes.get)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
