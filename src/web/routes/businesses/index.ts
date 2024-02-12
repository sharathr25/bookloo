import { businessService } from "../../../core/services/business";
import { BusinessRoutes } from "./BusinessRoutes";

export const businessRoutes = new BusinessRoutes(businessService);
