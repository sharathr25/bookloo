import { AssetRepositoryImpl } from "../../../db/repositories/AssetRepositoryImpl";
import { AssetServiceImpl } from "./AssetServiceImpl";

export const assetService = new AssetServiceImpl(new AssetRepositoryImpl());
