import { FeatureMapper } from "./FeatureMapper";
import { AssetCreateDataSpecType } from "../models/asset/AssetCreateSpec";
import { AssetUpdateSpec } from "../../core/models/asset/AssetUpdateSpec";
import { AssetCreateSpec } from "../../core/models/asset/AssetCreateSpec";
import { Asset } from "../../core/models/asset/Asset";
import { AssetType } from "../models/asset/Asset";
import { MediaUrlMapper } from "./MediaUrlMapper";

export class AssetMapper {
  static mapCreateSpec(
    businessId: string,
    mediaFiles: File[],
    asset: AssetCreateDataSpecType
  ): AssetCreateSpec {
    const { features } = asset;
    return new AssetCreateSpec({
      ...asset,
      businessId,
      mediaFiles,
      features: features.map(FeatureMapper.toCore),
      mediaUrls: [],
      id: "",
    });
  }

  static mapUpdateSpec(
    mediaFiles: File[],
    asset: AssetUpdateSpec
  ): AssetUpdateSpec {
    const { features, mediaUrls } = asset;
    return new AssetUpdateSpec({
      ...asset,
      mediaFiles,
      features: features.map(FeatureMapper.toCore),
      mediaUrls: mediaUrls.map(MediaUrlMapper.toCore),
    });
  }

  static toRest(asset: Asset): AssetType {
    const { mediaUrls = [], ...rest } = asset;
    return { ...rest, mediaUrls: mediaUrls.map(MediaUrlMapper.toRest) };
  }
}
