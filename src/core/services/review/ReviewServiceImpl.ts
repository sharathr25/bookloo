import { Review } from "../../models/review/Review";
import { ReviewCreateSpec } from "../../models/review/ReviewCreateSpec";
import { ReviewRepository } from "../../repositories/ReviewRepository";
import { ReviewService } from "./ReviewService";

export class ReviewServiceImpl implements ReviewService {
  reviewRepo: ReviewRepository;

  constructor(reviewRepo: ReviewRepository) {
    this.reviewRepo = reviewRepo;
  }

  async create(review: ReviewCreateSpec): Promise<undefined> {
    await this.reviewRepo.create(review);
  }

  async getById(id: string): Promise<Review | null> {
    return await this.reviewRepo.getById(id);
  }

  async getByBusinessId(businessId: string): Promise<Review[]> {
    return await this.reviewRepo.getByBusinessId(businessId);
  }

  async delete(id: string): Promise<undefined> {
    await this.reviewRepo.delete(id);
  }
}
