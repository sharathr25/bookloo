export const OBJECT_STORAGE = {
  BUCKET_NAME: "bookloo",
  MINIO: {
    ENDPOINT: process.env.MINIO_ENDPOINT || "127.0.0.1",
    PORT: process.env.MINIO_PORT ? +process.env.MINIO_PORT : 9000,
    ACCESS_KEY: process.env.MINIO_ACCRESS_KEY || "7NhIKSxhUuyC6JYKMpWl",
    SECRET_KEY:
      process.env.MINIO_SECRET_KEY ||
      "LoQeSb8gHexnJnVdX2I7UhnIECSKjDBryKzZbuyv",
  },
};
export const THIS_SERVER = {
  PORT: process.env.PORT ? +process.env.PORT : 3000,
};
export const MONGO = {
  URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017",
  DB: process.env.MONGO_DB || "bookloo",
};
