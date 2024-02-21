import { assetService } from "../../../core/services/asset";
import { AssetRoutes } from "./AssetRoutes";

export const assetRoutes = new AssetRoutes(assetService);
