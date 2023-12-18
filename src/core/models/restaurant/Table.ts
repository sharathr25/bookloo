class Table extends Asset {
  restaurantId: string;
  capacity: number;

  constructor({
    id,
    restaurantId,
    price,
    discount,
    currency,
    bookings,
    capacity,
    media,
    features,
  }: AssetType & {
    restaurantId: string;
    roomNo: number;
    capacity: number;
  }) {
    super({
      id,
      price,
      discount,
      currency,
      bookings,
      media,
      features,
    });
    this.restaurantId = restaurantId;
    this.capacity = capacity;
  }
}
