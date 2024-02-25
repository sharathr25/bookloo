import { Static, t } from "elysia";
import { MediaEnumType } from "./MediaEnum";

export const MediaUrl = t.Object({
  type: MediaEnumType,
  url: t.String(),
});

export type MediaUrlType = Static<typeof MediaUrl>;
