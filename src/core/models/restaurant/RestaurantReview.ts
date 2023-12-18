class RestaurantReview extends Review {
  restaurantId: string;

  constructor({
    id,
    restaurantId,
    rating,
    review,
    user,
  }: ReviewType & { restaurantId: string }) {
    super({ id, rating, review, user });
    this.restaurantId = restaurantId;
  }
}
