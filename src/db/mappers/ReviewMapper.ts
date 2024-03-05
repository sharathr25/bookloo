import { Review } from "../../core/models/review/Review";
import { ReviewType } from "../models/Review";

export class ReviewMapper {
  static toCore(review: ReviewType): Review {
    const { _id, user, ...rest } = review;
    const { profilePicUrl, ...rest2 } = user;

    return {
      id: _id.toString(),
      user: { profilePicUrl: profilePicUrl || undefined, ...rest2 },
      ...rest,
    };
  }
}
