import { MediaUrl } from "../../core/models/MediaUrl";
import { MediaEnum as MediaEnumCore } from "../../core/models/MediaEnum";
import { MediaEnum } from "../models/MediaEnum";
import { MediaUrlType } from "../models/MediaUrl";

export class MediaUrlMapper {
  static toCore(mediaUrlsRest: MediaUrlType): MediaUrl {
    return {
      url: mediaUrlsRest.url,
      type: MediaEnumCore[mediaUrlsRest.type as keyof typeof MediaEnumCore],
    };
  }

  static toRest(mediaUrlCore: MediaUrl): MediaUrlType {
    return { type: MediaEnum[mediaUrlCore.type], url: mediaUrlCore.url };
  }
}
