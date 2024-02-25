import { MediaType } from "./MediaType";

export class Media {
  type: MediaType;
  url: string;

  constructor({ type, url }: { type: MediaType; url: string }) {
    this.type = type;
    this.url = url;
  }
}
