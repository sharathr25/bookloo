import { Feature } from "../../core/models/Feature";
import { FeatureType } from "../models/Feature";

export class FeatureMapper {
  static toCore(feature: FeatureType): Feature {
    const { name, description, price, discount, currency, category } = feature;
    return {
      name,
      description,
      price,
      discount,
      category,
      currency,
    };
  }
}
