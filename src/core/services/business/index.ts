import { BusinessesRepositoryImpl } from "../../../db/repositories/BusinessRepositoryImpl";
import { BusinessServiceImpl } from "./BusinessServiceImpl";

export const businessService = new BusinessServiceImpl(
  new BusinessesRepositoryImpl()
);
