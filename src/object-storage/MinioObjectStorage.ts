import { Client } from "minio";
import { ObjectStorage } from "../core/services/ObjectStorage";
import { Media } from "../core/models/Media";
import { MediaEnum } from "../core/models/MediaType";

const MINIO_SERVER_ENDPOINT = "127.0.0.1";
const MINIO_SERVER_PORT = 9000;
const MINIO_BUCKET_NAME = "bookloo";

export class MinioObjectStorage implements ObjectStorage {
  minioClient: Client;

  constructor() {
    this.minioClient = new Client({
      endPoint: MINIO_SERVER_ENDPOINT,
      port: MINIO_SERVER_PORT,
      useSSL: false,
      accessKey: "7NhIKSxhUuyC6JYKMpWl",
      secretKey: "LoQeSb8gHexnJnVdX2I7UhnIECSKjDBryKzZbuyv",
    });
  }

  async init() {
    const bucketExists = await this.bucketExists(MINIO_BUCKET_NAME);
    if (!bucketExists) {
      await this.createBucket(MINIO_BUCKET_NAME);
    }
  }

  async storeFile(folderName: string, file: File): Promise<Media> {
    const arrBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrBuffer);
    const fileName = `${folderName}/${file.name}`;
    await this.minioClient.putObject(
      MINIO_BUCKET_NAME,
      fileName,
      buffer,
      buffer.length
    );

    return new Media({
      url: `${MINIO_SERVER_ENDPOINT}:${MINIO_SERVER_PORT}/${fileName}`,
      type: MediaEnum.IMAGE,
    });
  }

  async storeFiles(bucketName: string, files: File[]): Promise<Media[]> {
    const mediaUrls: Media[] = [];
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
