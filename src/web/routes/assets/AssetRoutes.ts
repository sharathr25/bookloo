import Elysia from "elysia";
import { AssetService } from "../../../core/services/asset/AssetService";
import { IdSpec, IdSpecType } from "../../models/IdSpec";
import {
  AssetQuerySpec,
  AssetQuerySpecType,
} from "../../models/asset/AssetQuerySpec";
import {
  AssetUpdateSpec,
  AssetUpdateSpecType,
} from "../../models/asset/AssetUpdateSpec";
import {
  AssetCreateSpec,
  AssetCreateSpecType,
} from "../../models/asset/AssetCreateSpec";
import { AssetMapper } from "../../mappers/AssetMapper";

export class AssetRoutes {
  assetService: AssetService;

  constructor(assetService: AssetService) {
    this.assetService = assetService;
  }

  async create({ body }: { body: AssetCreateSpecType }) {
    await this.assetService.create(AssetMapper.mapCreateSpec(body));
  }

  async getAll({ query }: { query: AssetQuerySpecType }) {
    return await this.assetService.getAll(query);
  }

  async getOne({ params }: { params: IdSpecType }) {
    this.assetService.getById(params.id);
  }

  async update({
    params,
    body,
  }: {
    params: IdSpecType;
    body: AssetUpdateSpecType;
  }) {
    this.assetService.update(params.id, AssetMapper.mapUpdateSpec(body));
  }

  async delete({ params }: { params: IdSpecType }) {
    this.assetService.delete(params.id);
  }

  get() {
    return new Elysia().group("/assets", (app) =>
      app
        .post("/", this.create, {
          body: AssetCreateSpec,
        })
        .get("/", this.getAll, {
          query: AssetQuerySpec,
        })
        .get("/:id", this.getOne, {
          params: IdSpec,
        })
        .put("/:id", this.update, {
          body: AssetUpdateSpec,
          params: IdSpec,
        })
        .delete("/:id", this.delete, {
          params: IdSpec,
        })
    );
  }
}
