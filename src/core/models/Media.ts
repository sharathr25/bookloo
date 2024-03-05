import { MediaEnum } from "./MediaType";

export class Media {
  type: MediaEnum;
  url: string;

  constructor({ type, url }: { type: MediaEnum; url: string }) {
    this.type = type;
    this.url = url;
  }
}
