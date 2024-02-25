import { Media } from "../../core/models/Media";
import { MediaEnum } from "../models/MediaEnum";
import { MediaUrlType } from "../models/MediaUrl";

export class MediaUrlMapper {
  static toRest(mediaUrlCore: Media): MediaUrlType {
    return { type: MediaEnum[mediaUrlCore.type], url: mediaUrlCore.url };
  }
}
