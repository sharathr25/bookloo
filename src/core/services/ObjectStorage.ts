import { MediaUrl } from "../models/MediaUrl";

export interface ObjectStorage {
  storeFiles(folderName: string, files: File[]): Promise<MediaUrl[]>;
  // bucketExists(bucketName: string): Promise<boolean>;
  // createBucket(bucketName: string): Promise<undefined>;
}
