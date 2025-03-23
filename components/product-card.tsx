import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background">
      <Link href={`/products`} className="relative block overflow-hidden">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          width={400}
          height={500}
          className="h-[400px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            New
          </div>
        )}
      </Link>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="font-semibold">Rp {product.price.toFixed(2)}</p>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
