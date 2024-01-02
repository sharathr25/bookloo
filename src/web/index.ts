import { Elysia } from "elysia";
import hotels from "./routes/hotels";

const app = new Elysia()
  .use(hotels)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
