import { FeatureType } from "../models/Feature";

export class FeatureMapper {
  static map(feature: FeatureType): Feature {
    const { name, description, price, discount, currency, category } = feature;
    return new Feature({
      name,
      description,
      price,
      discount,
      category,
      currency,
    });
  }
}
