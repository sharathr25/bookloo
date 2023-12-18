class Room extends Asset {
  hotelId: string;
  roomNo: number;
  capacity: number;

  constructor({
    id,
    hotelId,
    price,
    discount,
    currency,
    roomNo,
    bookings,
    capacity,
    media,
    features,
  }: {
    id: string;
    hotelId: string;
    discount: number;
    price: number;
    currency: string;
    roomNo: number;
    bookings: [Booking];
    capacity: number;
    media: [Media];
    features: [Feature];
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
    this.hotelId = hotelId;
    this.roomNo = roomNo;
    this.capacity = capacity;
  }
}
