import { Currency } from "./currency";

type Product = {
  name: string;
  image: string;
  price: number;
  qty: number;
  id: string;
  currency?: Currency;
  category?: ProductCategory;
};

export type { Product };
