class Hotel extends Business {
  stars: number;

  constructor({
    id,
    name,
    description,
    address,
    city,
    state,
    country,
    pincode,
    location,
    stars,
    rating,
    numberOfRatings,
    media,
    features,
  }: BusinessType & { stars: number }) {
    super({
      id,
      name,
      description,
      address,
      city,
      state,
      country,
      pincode,
      location,
      rating,
      numberOfRatings,
      media,
      features,
    });
    this.stars = stars;
  }
}
