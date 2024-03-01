import { Review } from "../models/review/Review";
import { ReviewCreateSpec } from "../models/review/ReviewCreateSpec";

export interface ReviewRepository {
  create(review: ReviewCreateSpec): Promise<undefined>;
  getById(id: string): Promise<Review | null>;
  getByBusinessId(businessId: string): Promise<Review[]>;
  delete(id: string): Promise<undefined>;
}
