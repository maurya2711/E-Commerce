export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  name: string;
  title?: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  image: string;
  badge?: string;
  description?: string;
  category?: string;
}

export type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";
