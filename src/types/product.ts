import { Currency } from "./currency";

type Product = {
  name: string;
  image: string;
  price: number;
  qty: number;
  id: string;
  currency?: Currency;
};

export type { Product };
