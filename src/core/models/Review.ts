type ReviewType = {
  id: string;
  rating: number;
  review: string;
  user: ReviewedUser;
  businessId: string;
};

class Review {
  id: string;
  businessId: string;
  rating: number;
  review: string;
  user: ReviewedUser;

  constructor({ id, rating, review, user, businessId }: ReviewType) {
    this.id = id;
    this.review = review;
    this.rating = rating;
    this.user = user;
    this.businessId = businessId;
  }
}
