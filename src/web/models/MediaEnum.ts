import { t } from "elysia";

export enum MediaEnum {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export const MediaEnumType = t.Union([
  t.Literal(MediaEnum.IMAGE),
  t.Literal(MediaEnum.VIDEO),
]);
