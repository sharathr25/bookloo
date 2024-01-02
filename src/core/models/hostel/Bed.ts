class Bed extends Asset {
  hostelId: string;
  roomNo: number;
  bedNo: number;

  constructor({
    id,
    hostelId,
    price,
    discount,
    currency,
    roomNo,
    bedNo,
    bookings,
    media,
    features,
  }: AssetType & {
    hostelId: string;
    bedNo: number;
    roomNo: number;
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
    this.id = id;
    this.hostelId = hostelId;
    this.roomNo = roomNo;
    this.bedNo = bedNo;
    this.discount = discount;
    this.price = price;
    this.currency = currency;
    this.bookings = bookings;
    this.media = media;
    this.features = features;
  }
}
