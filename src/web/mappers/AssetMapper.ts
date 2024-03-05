import { FeatureMapper } from "./FeatureMapper";
import { AssetCreateDataSpecType } from "../models/asset/AssetCreateSpec";
import { AssetUpdateSpec } from "../../core/models/asset/AssetUpdateSpec";
import { Asset } from "../../core/models/asset/Asset";
import { AssetType } from "../models/asset/Asset";
import { MediaUrlMapper } from "./MediaUrlMapper";
import { AssetWebCreateSpec } from "../../core/models/asset/AssetWebCreateSpec";

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
    mediaFiles: File[],
    asset: AssetUpdateSpec
  ): AssetUpdateSpec {
    const { features, mediaUrls } = asset;
    return {
      ...asset,
      mediaFiles,
      features: features.map(FeatureMapper.toCore),
      mediaUrls: mediaUrls.map(MediaUrlMapper.toCore),
    };
  }

  static toRest(asset: Asset): AssetType {
    const { mediaUrls = [], ...rest } = asset;
    return { ...rest, mediaUrls: mediaUrls.map(MediaUrlMapper.toRest) };
  }
}
