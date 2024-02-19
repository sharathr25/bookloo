import { AssetRepositoryImpl } from "../../../db/repositories/AssetRepositoryImpl";
import { AssetServiceImpl } from "./AssetServiceImpl";

export const businessService = new AssetServiceImpl(new AssetRepositoryImpl());
