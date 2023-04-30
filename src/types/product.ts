import type { Currency } from "./currency";
import type { ProductCategory } from "./product-category";

type ProductType = {
  name: string;
  image: string;
  price: number;
  qty: number;
  id: string;
  currency?: Currency;
  category?: ProductCategory;
};

export type { ProductType };
