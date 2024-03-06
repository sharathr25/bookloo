import Elysia, { t } from "elysia";
import { AssetQuerySpec } from "../../models/asset/AssetQuerySpec";
import { BusinessIdSpec } from "../../models/business/BusinessIdSpec";
import { reviewService } from "../../../core/services/review";
import { ReviewRoutesHandler } from "./ReviewRouteHandler";
import { ReviewGetOneSpec } from "../../models/review/ReviewGetOneSpec";
import { ReviewCreateSpec } from "../../models/review/ReviewCreateSpec";
import { Reviews } from "../../models/review/Reviews";
import { Review } from "../../models/review/Review";

const reviewRoutesHandler = new ReviewRoutesHandler(reviewService);

export const reviewRoutes = new Elysia().group(
  "/businesses/:businessId/reviews",
  { params: BusinessIdSpec },
  (app) =>
    app
      .post("/", reviewRoutesHandler.create.bind(reviewRoutesHandler), {
        body: ReviewCreateSpec,
      })
      .get("/", reviewRoutesHandler.getByBusinessId.bind(reviewRoutesHandler), {
        query: AssetQuerySpec,
        response: Reviews,
      })
      .get("/:reviewId", reviewRoutesHandler.getOne.bind(reviewRoutesHandler), {
        params: ReviewGetOneSpec,
        response: {
          200: Review,
          404: t.Null(),
        },
      })
      .delete(
        "/:reviewId",
        reviewRoutesHandler.delete.bind(reviewRoutesHandler),
        {
          params: ReviewGetOneSpec,
        }
      )
);
