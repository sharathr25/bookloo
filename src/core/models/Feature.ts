export class Feature {
  id?: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  currency: string;
  category: string;

  constructor({
    id,
    name,
    description,
    price,
    discount,
    currency,
    category,
  }: {
    id?: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    discount: number;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.currency = currency;
    this.category = category;
  }
}
