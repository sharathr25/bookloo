import { MediaUrl } from "../core/models/MediaUrl";
import { ObjectStorage } from "../core/services/ObjectStorage";

export class S3ObjectStorage implements ObjectStorage {
  storeFiles(folderName: string, files: File[]): Promise<MediaUrl[]> {
    throw new Error("Method not implemented.");
  }
}
