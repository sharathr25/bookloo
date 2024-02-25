import Elysia from "elysia";
import { assetService } from "../../../core/services/asset";
import { AssetRoutesHandler } from "./AssetRoutesHandler";
import { IdSpec } from "../../models/IdSpec";
import { AssetUpdateSpec } from "../../models/asset/AssetUpdateSpec";
import { AssetQuerySpec } from "../../models/asset/AssetQuerySpec";
import { AssetCreateSpec } from "../../models/asset/AssetCreateSpec";

const assetRoutesHandler = new AssetRoutesHandler(assetService);

export const assetRoutes = new Elysia().group(
  "/business/:id/assets",
  { params: IdSpec },
  (app) =>
    app
      .post("/", assetRoutesHandler.create.bind(assetRoutesHandler), {
        body: AssetCreateSpec,
      })
      .get("/", assetRoutesHandler.getAll.bind(assetRoutesHandler), {
        query: AssetQuerySpec,
      })
      .get("/:id", assetRoutesHandler.getOne.bind(assetRoutesHandler), {
        params: IdSpec,
      })
      .put("/:id", assetRoutesHandler.update.bind(assetRoutesHandler), {
        body: AssetUpdateSpec,
        params: IdSpec,
      })
      .delete("/:id", assetRoutesHandler.delete.bind(assetRoutesHandler), {
        params: IdSpec,
      })
);
