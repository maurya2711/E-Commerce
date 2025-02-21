import React, { useEffect, useState } from "react";
import "./App.css";
import {
  useGetProductsQuery,
  useFetchCategoriesQuery,
} from "./store/products/productApiSlice";
import { Header } from "./components/Header";
import { ProductFilters } from "./components/ProductFilter";
import { ProductGrid } from "./components/ProductGrid";
import { Category } from "./types";

function App() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const { data: categories } = useFetchCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category); // Toggle category selection
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="/" className="hover:text-gray-900">
              HOME
            </a>
            <span>/</span>
            <span className="text-gray-900">SHOP</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <aside className="hidden md:block">
            <ProductFilters
              categories={categories}
              onCategorySelect={handleCategorySelect}
            />
          </aside>
          <main>
            <ProductGrid
              products={products}
              selectedCategory={selectedCategory}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
