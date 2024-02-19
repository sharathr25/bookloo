import { FeatureMapper } from "./FeatureMapper";
import { Asset } from "../../core/models/Asset";
import { AssetType } from "../models/asset/Asset";

export class AssetMapper {
  static map(asset: AssetType): Asset {
    const { features } = asset;
    return new Asset({
      ...asset,
      features: features.map(FeatureMapper.map),
    });
  }
}
