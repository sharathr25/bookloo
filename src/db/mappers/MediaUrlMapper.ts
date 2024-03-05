import { MediaUrl } from "../../core/models/MediaUrl";
import { MediaType } from "../schemas/MediaSchema";
import { MediaEnum } from "../../core/models/MediaEnum";

export class MediaUrlMapper {
  static toCore(media: MediaType): MediaUrl {
    return { type: MediaEnum[media.type], url: media.type };
  }
}
