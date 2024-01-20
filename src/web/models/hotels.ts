import { t } from "elysia";
import {
  businessResponse,
  businessSpec,
  idSpec,
  businessQuerySpec,
} from "./common";

export const hotelCreateSpec = t.Object({
  ...businessSpec.properties,
  stars: t.Optional(t.Number()),
});
export const hotelQuerySpec = t.Object({
  ...businessQuerySpec.properties,
  stars: t.Optional(t.Number()),
});
export const hotelIdSpec = idSpec;
export const hotelUpdateSpec = t.Object({
  ...businessSpec.properties,
  stars: t.Number(),
});
export const hotelResponse = t.Object({
  ...businessResponse.properties,
  stars: t.Number(),
});
