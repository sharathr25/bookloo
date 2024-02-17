import { t } from "elysia";
import { UUID_PATTERN } from "../../core/constants";

export const IdSpec = t.Object({
  id: t.String({ pattern: UUID_PATTERN }),
});
