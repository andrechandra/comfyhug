import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function NewArrivals() {
  // Get products 4-7 for new arrivals section
  const newProducts = products.slice(4, 8)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {newProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

