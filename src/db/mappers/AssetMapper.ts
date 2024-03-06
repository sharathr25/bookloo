import { Asset } from "../../core/models/asset/Asset";
import { AssetEnum } from "../../core/models/asset/AssetEnum";
import { AssetType } from "../models/Asset";
import { MediaUrlMapper } from "./MediaUrlMapper";

export class AssetMapper {
  static toCore(asset: AssetType): Asset {
    const {
      _id,
      mediaUrls,
      capacity,
      roomNo,
      tableNo,
      bedNo,
      type,
      __v,
      ...rest
    } = asset;

    return {
      id: _id.toString(),
      mediaUrls: mediaUrls.map(MediaUrlMapper.toCore),
      capacity: capacity || undefined,
      roomNo: roomNo || undefined,
      tableNo: tableNo || undefined,
      bedNo: bedNo || undefined,
      type: AssetEnum[type as keyof typeof AssetEnum],
      ...rest,
    };
  }
}
