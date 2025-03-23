import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/4 lg:w-1/5">
              <div className="sticky top-20 space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Search</h3>
                  <div className="relative">
                    <Input placeholder="Search products..." className="pr-8" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                </div>                
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#bfbecd] border border-gray-200 cursor-pointer"></div>
                    <div className="h-6 w-6 rounded-full bg-[#efc8c9] border border-gray-200 cursor-pointer"></div>                    
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold md:text-3xl">All Products</h1>
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm">
                    Sort by:
                  </Label>
                  <select
                    id="sort"
                    className="rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                  >
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

