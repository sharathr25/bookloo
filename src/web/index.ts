import { Elysia } from "elysia";
import { userRoutes } from "./routes/users";
import { businessRoutes } from "./routes/businesses";
import { assetRoutes } from "./routes/assets";

const app = new Elysia()
  .use(userRoutes.get)
  .use(businessRoutes.get)
  .use(assetRoutes.get)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
