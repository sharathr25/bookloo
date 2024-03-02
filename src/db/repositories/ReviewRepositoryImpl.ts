import { Review } from "../../core/models/review/Review";
import { ReviewCreateSpec } from "../../core/models/review/ReviewCreateSpec";
import { ReviewRepository } from "../../core/repositories/ReviewRepository";
import { ReviewMapper } from "../mappers/ReviewMapper";
import { ReviewModel } from "../models/Review";

export class ReviewRepositoryImpl implements ReviewRepository {
  async create(review: ReviewCreateSpec): Promise<undefined> {
    await new ReviewModel(review).save();
  }

  async getById(id: string): Promise<Review | null> {
    const review = await ReviewModel.findById(id);
    return review ? ReviewMapper.toCore(review.toObject()) : null;
  }

  async getByBusinessId(businessId: string): Promise<Review[]> {
    const reivews = await ReviewModel.find({ businessId });
    return reivews.map((r) => r.toObject()).map(ReviewMapper.toCore);
  }

  async delete(id: string): Promise<undefined> {
    await ReviewModel.deleteOne({ _id: id });
  }
}
