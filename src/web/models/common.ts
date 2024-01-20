import { t } from "elysia";

const UUID_PATTERN = "^[0-9a-fA-F]{24}$";

export const businessSpec = t.Object({
  name: t.String(),
  description: t.String(),
  city: t.String(),
  state: t.String(),
  country: t.String(),
  pincode: t.String(),
  location: t.Object({
    longitude: t.Number(),
    latitude: t.Number(),
  }),
  media: t.Files(),
  features: t.Array(
    t.Object({
      name: t.String(),
      description: t.String(),
      price: t.Number(),
      discount: t.Number(),
      currency: t.Number(),
      category: t.String(),
    })
  ),
  rating: t.Number(),
  numberOfRatings: t.Number(),
});

export const idSpec = t.Object({
  id: t.String({ pattern: UUID_PATTERN }),
});

export const businessQuerySpec = t.Object({
  name: t.Optional(t.String()),
  city: t.Optional(t.String()),
  state: t.Optional(t.String()),
  country: t.Optional(t.String()),
  pincode: t.Optional(t.String()),
  longitude: t.Optional(t.Number()),
  latitude: t.Optional(t.Number()),
  rating: t.Optional(t.Number()),
});

export const businessResponse = t.Object({
  ...businessSpec.properties,
  ...idSpec.properties,
});
