import { Elysia } from "elysia";
import { userRoutes } from "./routes/users";
import { businessRoutes } from "./routes/businesses";
import { assetRoutes } from "./routes/assets";
import { reviewRoutes } from "./routes/reviews";
import { THIS_SERVER } from "../config";

const { PORT } = THIS_SERVER;

export class WebServer {
  static listen(): undefined {
    const app = new Elysia()
      .use(userRoutes)
      .use(assetRoutes)
      .use(reviewRoutes)
      .use(businessRoutes)
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
