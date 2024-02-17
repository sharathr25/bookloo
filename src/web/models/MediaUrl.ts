import { Static, t } from "elysia";
import { MediaType } from "./MediaType";

export const MediaUrl = t.Object({
  type: t.Enum(MediaType),
  url: t.String(),
});

export type MediaUrlType = Static<typeof MediaUrl>;
