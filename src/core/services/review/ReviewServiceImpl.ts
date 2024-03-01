import { Review } from "../../models/review/Review";
import { ReviewCreateSpec } from "../../models/review/ReviewCreateSpec";
import { ReviewRepository } from "../../repositories/ReviewRepository";
import { ReviewService } from "./ReviewService";

export class ReviewServiceImpl implements ReviewService {
  reviewRepo: ReviewRepository;

  constructor(reviewRepo: ReviewRepository) {
    this.reviewRepo = reviewRepo;
  }

  create(review: ReviewCreateSpec): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Promise<Review | null> {
    throw new Error("Method not implemented.");
  }
  getByBusinessId(businessId: String): Promise<Review[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<undefined> {
    throw new Error("Method not implemented.");
  }
}
