import { Static, t } from "elysia";
import { UUID_PATTERN } from "../../core/constants";

export const IdSpec = t.Object({
  id: t.String({ pattern: UUID_PATTERN }),
});

export type IdSpecType = Static<typeof IdSpec>;
