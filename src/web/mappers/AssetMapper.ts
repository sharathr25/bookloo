import { FeatureMapper } from "./FeatureMapper";
import { AssetCreateSpecType } from "../models/asset/AssetCreateSpec";
import { AssetUpdateSpec } from "../../core/models/asset/AssetUpdateSpec";
import { AssetCreateSpec } from "../../core/models/asset/AssetCreateSpec";
import { Asset } from "../../core/models/asset/Asset";
import { AssetType } from "../models/asset/Asset";

export class AssetMapper {
  static mapCreateSpec(asset: AssetCreateSpecType): AssetCreateSpec {
    const { features } = asset;
    return new AssetCreateSpec({
      ...asset,
      features: features.map(FeatureMapper.map),
    });
  }

  static mapUpdateSpec(asset: AssetUpdateSpec): AssetUpdateSpec {
    const { features } = asset;
    return new AssetUpdateSpec({
      ...asset,
      features: features.map(FeatureMapper.map),
    });
  }

  static map(asset: Asset): AssetType {
    return { ...asset };
  }
}
