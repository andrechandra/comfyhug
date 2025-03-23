import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium tracking-tight sm:text-5xl xl:text-6xl/none">
                Comfort Meets Style
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience the perfect blend of comfort and elegance with
                COMFYHUG's premium ladies homewear collection.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Shop Collection
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary-foreground hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/images/product-1.png"
            width={600}
            height={600}
            alt="COMFYHUG homewear"
            className="mx-auto aspect-auto overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
