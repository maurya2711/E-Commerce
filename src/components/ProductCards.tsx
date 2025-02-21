import { Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    title?: string;
    price: number;
    oldPrice: number | null;
    rating: any;
    image: string;
    badge?: string;
  };
  viewMode: "grid" | "list";
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  return (
    <div
      className={`group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow
      ${viewMode === "list" ? "flex" : ""}`}
    >
      <div
        className={`relative ${
          viewMode === "list" ? "w-[300px] shrink-0" : "w-full"
        }`}
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full max-h-[200px] object-contain transition-transform duration-300 group-hover:scale-110"
        />
        {product.badge && (
          <span
            className={`
            absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded
            ${
              product.badge === "Sale"
                ? "bg-red-500 text-white"
                : "bg-black text-white"
            }
          `}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
        <div className={viewMode === "list" ? "" : "text-center"}>
          <h3 className="font-medium">{product.name || product.title}</h3>
          <div
            className={`flex ${
              viewMode === "list" ? "" : "justify-center"
            } space-x-0.5 mt-2`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating.rate
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <div
            className={`mt-2 flex items-center space-x-2 ${
              viewMode === "list" ? "" : "justify-center"
            }`}
          >
            <span className="font-semibold">€{product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">
                €{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          {viewMode === "list" && (
            <div className="mt-4">
              <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
