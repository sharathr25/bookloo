class HotelReview extends Review {
  hotelId: string;

  constructor({
    id,
    hotelId,
    rating,
    review,
    user,
  }: ReviewType & { hotelId: string }) {
    super({ id, rating, review, user });
    this.hotelId = hotelId;
  }
}
