import { Media } from "../../core/models/Media";
import { MediaType } from "../schemas/MediaSchema";
import { MediaType as MediaEnum } from "../../core/models/MediaType";

export class MediaUrlMapper {
  static map(media: MediaType): Media {
    return new Media({ type: MediaEnum[media.type], url: media.type });
  }
}
