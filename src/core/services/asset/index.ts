import { AssetRepositoryImpl } from "../../../db/repositories/AssetRepositoryImpl";
import { MinioObjectStorage } from "../../../object-storage/MinioObjectStorage";
import { AssetServiceImpl } from "./AssetServiceImpl";

export const assetService = new AssetServiceImpl(
  new AssetRepositoryImpl(),
  new MinioObjectStorage()
);
