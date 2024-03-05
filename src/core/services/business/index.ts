import { BusinessesRepositoryImpl } from "../../../db/repositories/BusinessRepositoryImpl";
import { MinioObjectStorage } from "../../../object-storage/MinioObjectStorage";
import { BusinessServiceImpl } from "./BusinessServiceImpl";

export const businessService = new BusinessServiceImpl(
  new BusinessesRepositoryImpl(),
  new MinioObjectStorage()
);
