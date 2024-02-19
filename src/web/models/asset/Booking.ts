import { Static, t } from "elysia";

export const Booking = t.Object({
  checkIn: t.Date(),
  checkOut: t.Date(),
});

export type BookingType = Static<typeof Booking>;
