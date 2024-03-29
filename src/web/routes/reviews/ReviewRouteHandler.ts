import { BusinessIdSpecType } from "../../models/business/BusinessIdSpec";
import { ReviewService } from "../../../core/services/review/ReviewService";
import { ReviewGetOneSpecType } from "../../models/review/ReviewGetOneSpec";
import { ReviewCreateSpecType } from "../../models/review/ReviewCreateSpec";
import { ReviewMapper } from "../../mappers/ReviewMapper";
import { Review } from "../../../core/models/review/Review";

export class ReviewRoutesHandler {
  reviewService: ReviewService;

  constructor(reviewService: ReviewService) {
    this.reviewService = reviewService;
  }

  async create({
    body,
    params,
  }: {
    body: ReviewCreateSpecType;
    params: BusinessIdSpecType;
  }) {
    await this.reviewService.create(
      ReviewMapper.toCoreCreateSpec(params.businessId, body)
    );
  }

  async getByBusinessId({ params }: { params: BusinessIdSpecType }) {
    const reviews: Review[] = await this.reviewService.getByBusinessId(
      params.businessId
    );
    return reviews.map(ReviewMapper.toRest);
  }

  async getOne({ params, set }: { params: ReviewGetOneSpecType; set: any }) {
    const review: Review | null = await this.reviewService.getById(
      params.reviewId
    );
    if (!review) {
      set.status = 404;
      return null;
    }
    return ReviewMapper.toRest(review);
  }

  async delete({ params }: { params: ReviewGetOneSpecType }) {
    this.reviewService.delete(params.reviewId);
  }
}
