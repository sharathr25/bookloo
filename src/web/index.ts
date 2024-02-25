import { Elysia } from "elysia";
import { userRoutes } from "./routes/users";
import { businessRoutes } from "./routes/businesses";
import { assetRoutes } from "./routes/assets";

const PORT = 3000;

export class WebServer {
  static listen(): undefined {
    const app = new Elysia()
      .use(userRoutes)
      .use(businessRoutes)
      .use(assetRoutes)
      .listen(PORT)
      .onError((e) => {
        console.error(e.error.message, {
          url: e.request.url,
          method: e.request.method,
          status: e.set.status,
          stack: e.error.stack,
        });
      });

    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
  }
}
