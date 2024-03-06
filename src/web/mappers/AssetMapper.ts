import { FeatureMapper } from "./FeatureMapper";
import { AssetCreateDataSpecType } from "../models/asset/AssetCreateSpec";
import { Asset } from "../../core/models/asset/Asset";
import { AssetType } from "../models/asset/Asset";
import { MediaUrlMapper } from "./MediaUrlMapper";
import { AssetWebCreateSpec } from "../../core/models/asset/AssetWebCreateSpec";
import { AssetUpdateDataSpecType } from "../models/asset/AssetUpdateSpec";
import { AssetWebUpdateSpec } from "../../core/models/asset/AssetWebUpdateSpec";

export class AssetMapper {
  static toCoreCreateSpec(
    businessId: string,
    mediaFiles: File[],
    asset: AssetCreateDataSpecType
  ): AssetWebCreateSpec {
    const { features } = asset;
    return {
      ...asset,
      businessId,
      mediaFiles,
      features: features.map(FeatureMapper.toCore),
    };
  }

  static toCoreUpdateSpec(
    businessId: string,
    mediaFiles: File[],
    asset: AssetUpdateDataSpecType
  ): AssetWebUpdateSpec {
    const { features } = asset;
    return {
      ...asset,
      businessId,
      mediaFiles,
      features: features.map(FeatureMapper.toCore),
    };
  }

  static toRest(asset: Asset): AssetType {
    const { mediaUrls = [], ...rest } = asset;
    return { ...rest, mediaUrls: mediaUrls.map(MediaUrlMapper.toRest) };
  }
}
