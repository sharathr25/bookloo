import { Media } from "../models/Media";

export interface ObjectStorage {
  storeFiles(folderName: string, files: File[]): Promise<Media[]>;
  // bucketExists(bucketName: string): Promise<boolean>;
  // createBucket(bucketName: string): Promise<undefined>;
}
