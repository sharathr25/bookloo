type AssetType = {
  id: string;
  discount: number;
  price: number;
  currency: string;
  bookings: [Booking];
  media: [Media];
  features: [Feature];
};

class Asset {
  id: string;
  price: number;
  discount: number;
  currency: string;
  bookings: [Booking];
  media: [Media];
  features: [Feature];

  constructor({
    id,
    price,
    discount,
    currency,
    bookings,
    media,
    features,
  }: {
    id: string;
    discount: number;
    price: number;
    currency: string;
    bookings: [Booking];
    media: [Media];
    features: [Feature];
  }) {
    this.id = id;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.bookings = bookings;
    this.media = media;
    this.features = features;
  }
}
