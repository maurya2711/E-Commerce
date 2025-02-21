import apiSlice from "../apiSlice";
import { Product, Category } from "../../types"; // Import the Product type

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (response: Product[]) => response,
    }),
    fetchCategories: builder.query<Category[], void>({
      query: () => "/products/categories",
      transformResponse: (response: Category[]) => response,
    }),
  }),
});

export const { useGetProductsQuery, useFetchCategoriesQuery } = productApiSlice;
