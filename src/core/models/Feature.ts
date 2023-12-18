class Feature {
  name: string;
  description: string;
  price: number;
  discount: number;
  currency: string;
  category: string;

  constructor({
    name,
    description,
    price,
    discount,
    currency,
    category,
  }: {
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    discount: number;
  }) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.currency = currency;
    this.category = category;
  }
}
