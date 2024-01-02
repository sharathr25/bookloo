import { Elysia } from "elysia";
import hotels from "./routes/hotels";
import hostels from "./routes/hostels";
import restaurants from "./routes/restaurants";
import user from "./routes/users";

const app = new Elysia()
  .use(user)
  .use(hotels)
  .use(hostels)
  .use(restaurants)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
