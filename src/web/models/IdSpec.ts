import { Static, t } from "elysia";
import { UUID_PATTERN } from "../../core/constants";

export const Id = t.String({ pattern: UUID_PATTERN });

export const IdSpec = t.Object({
  id: Id,
});

export type IdSpecType = Static<typeof IdSpec>;
