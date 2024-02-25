import { AssetService } from "../../../core/services/asset/AssetService";
import { IdSpecType } from "../../models/IdSpec";
import { AssetQuerySpecType } from "../../models/asset/AssetQuerySpec";
import { AssetUpdateSpecType } from "../../models/asset/AssetUpdateSpec";
import { AssetCreateSpecType } from "../../models/asset/AssetCreateSpec";
import { AssetMapper } from "../../mappers/AssetMapper";

export class AssetRoutesHandler {
  assetService: AssetService;

  constructor(assetService: AssetService) {
    this.assetService = assetService;
  }

  async create({ body }: { body: AssetCreateSpecType }) {
    await this.assetService.create(AssetMapper.mapCreateSpec(body));
  }

  async getAll({ query }: { query: AssetQuerySpecType }) {
    // need to allow only for admins
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
}
