import { Static, t } from "elysia";
import { Id } from "../IdSpec";

export const BusinessIdSpec = t.Object({
  businessId: Id,
});

export type BusinessIdSpecType = Static<typeof BusinessIdSpec>;
