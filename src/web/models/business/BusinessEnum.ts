import { t } from "elysia";

export enum BusinessEnum {
  HOTEL = "HOTEL",
  HOSTEL = "HOSTEL",
  RESTUARANT = "RESTUARANT",
}

export const BusinessEnumType = t.Union([
  t.Literal(BusinessEnum.HOTEL),
  t.Literal(BusinessEnum.HOSTEL),
  t.Literal(BusinessEnum.RESTUARANT),
]);
