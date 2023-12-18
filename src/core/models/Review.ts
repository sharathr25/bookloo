type ReviewType = {
  id: string;
  rating: number;
  review: string;
  user: User;
};

class Review {
  id: string;
  rating: number;
  review: string;
  user: User;

  constructor({ id, rating, review, user }: ReviewType) {
    this.id = id;
    this.review = review;
    this.rating = rating;
    this.user = user;
  }
}
