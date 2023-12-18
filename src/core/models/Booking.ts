class Booking {
  checkIn: Date;
  checkOut: Date;

  constructor({ checkIn, checkOut }: { checkIn: Date; checkOut: Date }) {
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }
}
