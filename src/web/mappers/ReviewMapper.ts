import { Review } from "../../core/models/review/Review";
import { ReviewCreateSpec } from "../../core/models/review/ReviewCreateSpec";
import { ReviewCreateSpecType } from "../models/review/ReviewCreateSpec";

export class ReviewMapper {
  static toCoreCreateSpec(
    businessId: string,
    review: ReviewCreateSpecType
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
