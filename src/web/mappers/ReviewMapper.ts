import { Review } from "../../core/models/review/Review";
import { ReviewCreateSpec } from "../../core/models/review/ReviewCreateSpec";

export class ReviewMapper {
  static toCoreCreateSpec(
    businessId: string,
    review: ReviewCreateSpec
  ): ReviewCreateSpec {
    return {
      ...review,
      businessId,
    };
  }

  static toRest(review: Review) {
    return { ...review };
  }
}
