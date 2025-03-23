import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function FeaturedProducts() {
  // Get first 2 products for featured section
  const featuredProducts = products.slice(0, 2)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

