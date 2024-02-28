import { t } from "elysia";

export enum AssetEnum {
  ROOM = "ROOM",
  TABLE = "TABLE",
  BED = "BED",
}

export const AssetEnumType = t.Union([
  t.Literal(AssetEnum.ROOM),
  t.Literal(AssetEnum.TABLE),
  t.Literal(AssetEnum.BED),
]);
