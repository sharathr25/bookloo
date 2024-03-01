type ReviewCreateSpecType = {
  rating: number;
  review: string;
  user: ReviewedUser;
  businessId: string;
};

export class ReviewCreateSpec {
  businessId: string;
  rating: number;
  review: string;
  user: ReviewedUser;

  constructor({ rating, review, user, businessId }: ReviewCreateSpecType) {
    this.review = review;
    this.rating = rating;
    this.user = user;
    this.businessId = businessId;
  }
}
