import { Client } from "minio";
import { ObjectStorage } from "../core/services/ObjectStorage";
import { MediaUrl } from "../core/models/MediaUrl";
import { MediaEnum } from "../core/models/MediaEnum";
import { OBJECT_STORAGE } from "../config";

const { MINIO, BUCKET_NAME } = OBJECT_STORAGE;
const { ENDPOINT, PORT, ACCESS_KEY, SECRET_KEY } = MINIO;

export class MinioObjectStorage implements ObjectStorage {
  minioClient: Client;

  constructor() {
    this.minioClient = new Client({
      endPoint: ENDPOINT,
      port: PORT,
      useSSL: false,
      accessKey: ACCESS_KEY,
      secretKey: SECRET_KEY,
    });
  }

  async init() {
    const bucketExists = await this.bucketExists(BUCKET_NAME);
    if (!bucketExists) {
      await this.createBucket(BUCKET_NAME);
    }
  }

  async storeFile(folderName: string, file: File): Promise<MediaUrl> {
    const arrBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrBuffer);
    const fileName = `${folderName}/${file.name}`;
    await this.minioClient.putObject(
      BUCKET_NAME,
      fileName,
      buffer,
      buffer.length
    );

    return {
      url: `${ENDPOINT}:${PORT}/${fileName}`,
      type: MediaEnum.IMAGE,
    };
  }

  async storeFiles(bucketName: string, files: File[]): Promise<MediaUrl[]> {
    const mediaUrls: MediaUrl[] = [];
    for (const file of files) {
      const mediaUrl = await this.storeFile(bucketName, file);
      mediaUrls.push(mediaUrl);
    }
    return mediaUrls;
  }

  async createBucket(bucketName: string): Promise<undefined> {
    await this.minioClient.makeBucket(bucketName, "", { ObjectLocking: true });
  }

  async bucketExists(bucketName: string): Promise<boolean> {
    return await this.minioClient.bucketExists(bucketName);
  }
}
