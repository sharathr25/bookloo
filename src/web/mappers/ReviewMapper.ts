import { Review } from "../../core/models/review/Review";
import { ReviewCreateSpec } from "../../core/models/review/ReviewCreateSpec";
import { ReviewCreateSpecType } from "../models/review/CreateReviewSpec";

export class ReviewMapper {
  static toCoreCreateSpec(
    businessId: string,
    review: ReviewCreateSpecType
  ): ReviewCreateSpec {
    return new ReviewCreateSpec({
      ...review,
      businessId,
    });
  }

  static toRest(review: Review) {
    return { ...review };
  }
}
