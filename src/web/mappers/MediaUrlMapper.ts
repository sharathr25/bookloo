import { Media } from "../../core/models/Media";
import { MediaEnum as MediaEnumCore } from "../../core/models/MediaType";
import { MediaEnum } from "../models/MediaEnum";
import { MediaUrlType } from "../models/MediaUrl";

export class MediaUrlMapper {
  static toCore(mediaUrlsRest: MediaUrlType): Media {
    return new Media({
      url: mediaUrlsRest.url,
      type: MediaEnumCore[mediaUrlsRest.type as keyof typeof MediaEnumCore],
    });
  }

  static toRest(mediaUrlCore: Media): MediaUrlType {
    return { type: MediaEnum[mediaUrlCore.type], url: mediaUrlCore.url };
  }
}
