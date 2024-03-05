import { AssetService } from "../../../core/services/asset/AssetService";
import { AssetQuerySpecType } from "../../models/asset/AssetQuerySpec";
import {
  AssetUpdateDataSpecType,
  AssetUpdateSpecType,
} from "../../models/asset/AssetUpdateSpec";
import {
  AssetCreateSpecType,
  AssetCreateDataSpecType,
} from "../../models/asset/AssetCreateSpec";
import { AssetMapper } from "../../mappers/AssetMapper";
import { AssetIdSpecType } from "../../models/asset/AssetIdSpec";
import { BusinessIdSpecType } from "../../models/business/BusinessIdSpec";
import { Asset } from "../../../core/models/asset/Asset";

export class AssetRoutesHandler {
  assetService: AssetService;

  constructor(assetService: AssetService) {
    this.assetService = assetService;
  }

  async create({
    body,
    params,
  }: {
    body: AssetCreateSpecType;
    params: BusinessIdSpecType;
  }) {
    const { data, files }: { data: string; files: File[] } = body;
    const asset: AssetCreateDataSpecType = JSON.parse(data);
    await this.assetService.create(
      AssetMapper.toCoreCreateSpec(params.businessId, files, asset)
    );
  }

  async getAll({ query }: { query: AssetQuerySpecType }) {
    const assets: Asset[] = await this.assetService.getAll(query);
    return assets.map(AssetMapper.toRest);
  }

  async getOne({ params, set }: { params: AssetIdSpecType; set: any }) {
    const asset: Asset | null = await this.assetService.getById(params.assetId);
    if (!asset) {
      set.status = 404;
      return null;
    }
    return AssetMapper.toRest(asset);
  }

  async update({
    params,
    body,
  }: {
    params: AssetIdSpecType;
    body: AssetUpdateSpecType;
  }) {
    const { data, files }: { data: string; files: File[] } = body;
    const asset: AssetUpdateDataSpecType = JSON.parse(data);
    this.assetService.update(
      params.assetId,
      AssetMapper.toCoreUpdateSpec(files, asset)
    );
  }

  async delete({ params }: { params: AssetIdSpecType }) {
    this.assetService.delete(params.assetId);
  }
}
