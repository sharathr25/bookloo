import Elysia, { t } from "elysia";
import { assetService } from "../../../core/services/asset";
import { AssetRoutesHandler } from "./AssetRoutesHandler";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";
import { AssetQuerySpec } from "../../models/asset/AssetQuerySpec";
import { AssetCreateSpec } from "../../models/asset/AssetCreateSpec";
import { BusinessIdSpec } from "../../models/business/BusinessIdSpec";
import { Assets } from "../../models/asset/Assets";
import { Asset } from "../../models/asset/Asset";
import { AssetGetOneSpec } from "../../models/asset/AssetGetOneSpec";

const assetRoutesHandler = new AssetRoutesHandler(assetService);

export const assetRoutes = new Elysia().group(
  "/businesses/:businessId/assets",
  { params: BusinessIdSpec },
  (app) =>
    app
      .post("/", assetRoutesHandler.create.bind(assetRoutesHandler), {
        body: AssetCreateSpec,
      })
      .get("/", assetRoutesHandler.getAll.bind(assetRoutesHandler), {
        query: AssetQuerySpec,
        response: Assets,
      })
      .get("/:assetId", assetRoutesHandler.getOne.bind(assetRoutesHandler), {
        params: AssetGetOneSpec,
        response: {
          200: Asset,
          404: t.Null(),
        },
      })
      .put("/:assetId", assetRoutesHandler.update.bind(assetRoutesHandler), {
        body: AssetUpdateSpec,
        params: AssetGetOneSpec,
      })
      .delete("/:assetId", assetRoutesHandler.delete.bind(assetRoutesHandler), {
        params: AssetGetOneSpec,
      })
);
