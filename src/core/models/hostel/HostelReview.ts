class HostelReview extends Review {
  hostelId: string;

  constructor({
    id,
    hostelId,
    rating,
    review,
    user,
  }: ReviewType & { hostelId: string }) {
    super({ id, rating, review, user });
    this.hostelId = hostelId;
  }
}
