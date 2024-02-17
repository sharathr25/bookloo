import { Static, t } from "elysia";

export const Location = t.Object({
  longitude: t.Number(),
  latitude: t.Number(),
});

export type LocationType = Static<typeof Location>;
