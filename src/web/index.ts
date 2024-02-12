import { Elysia } from "elysia";
import businesses from "./routes/businesses";
import users from "./routes/users";

const app = new Elysia()
  .use(users)
  .use(businesses)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
