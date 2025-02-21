import { useState } from "react";
import { Search } from "lucide-react";
import { Category } from "../types";

interface CategoriesProps {
  categories: Category[] | undefined;
  onCategorySelect: (category: string) => void;
}

export function ProductFilters({
  categories = [],
  onCategorySelect,
}: CategoriesProps) {
  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white" },
    { name: "Red", class: "bg-red-500" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Yellow", class: "bg-yellow-500" },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    onCategorySelect(category);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="search" className="text-sm font-medium">
          Search
        </label>
        <div className="flex w-full items-center space-x-2 mt-1.5">
          <div className="relative flex-1">
            <input
              type="search"
              id="search"
              placeholder="Search here..."
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button className="rounded-md bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div
                className={`h-4 w-4 rounded border border-gray-300 flex items-center justify-center transition-colors
                  ${
                    selectedCategories.includes(category)
                      ? "bg-black border-black"
                      : "bg-white"
                  }`}
                onClick={() => toggleCategory(category)}
              >
                {selectedCategories.includes(category) && (
                  <span className="text-white text-xs">✓</span>
                )}
              </div>
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-6 h-6 rounded-full border relative ${color.class} ${
                selectedColor === color.name
                  ? "ring-2 ring-offset-2 ring-black"
                  : ""
              }`}
              onClick={() => setSelectedColor(color.name)}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
