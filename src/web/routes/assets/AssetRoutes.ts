import Elysia from "elysia";
import { AssetService } from "../../../core/services/asset/AssetService";
import { IdSpec } from "../../models/IdSpec";
import { AssetQuerySpec } from "../../models/asset/AssetQuerySpec";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";
import { AssetCreateSpec } from "../../models/asset/AssetCreateSpec";
import { AssetMapper } from "../../mappers/AssetMapper";

export class AssetRoutes {
  assetService: AssetService;

  constructor(assetService: AssetService) {
    this.assetService = assetService;
  }

  get() {
    return new Elysia().group("/assets", (app) =>
      app
        .post(
          "/",
          ({ body }) => this.assetService.create(AssetMapper.map(body)),
          {
            body: AssetCreateSpec,
          }
        )
        .get("/", ({ query }) => this.assetService.getAll(query), {
          query: AssetQuerySpec,
        })
        .get("/:id", ({ params }) => this.assetService.getById(params.id), {
          params: IdSpec,
        })
        .put(
          "/:id",
          ({ params, body }) =>
            this.assetService.update(params.id, AssetMapper.map(body)),
          {
            body: AssetUpdateSpec,
            params: IdSpec,
          }
        )
        .delete("/:id", ({ params }) => this.assetService.delete(params.id), {
          params: IdSpec,
        })
    );
  }
}
