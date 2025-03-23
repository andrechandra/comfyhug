import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Comfort Redefined</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our premium homewear collection is designed for ultimate comfort and style.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="grid gap-1">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Featured Collection</h2>
              <p className="text-muted-foreground">Discover our most loved pieces, designed for ultimate comfort.</p>
            </div>
            <FeaturedProducts />
            <div className="flex w-full justify-center">
              <Link href="/products">
                <Button variant="outline" className="mt-8 border-primary text-primary-foreground hover:bg-primary/10">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Why Choose COMFYHUG?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our premium homewear is designed with your comfort in mind.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                  className="h-6 w-6"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Premium Materials</h3>
                <p className="text-muted-foreground">
                  Ethically sourced, high-quality fabrics that feel luxurious against your skin.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                  className="h-6 w-6"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Elegant Design</h3>
                <p className="text-muted-foreground">
                  Feminine details like ruffle sleeves and square necklines for a stylish yet comfortable look.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                  className="h-6 w-6"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Perfect Fit</h3>
                <p className="text-muted-foreground">
                  Thoughtfully designed to flatter all body types while providing maximum comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Our Collection</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  COMFYHUG offers premium homewear sets in beautiful pastel colors, designed for both comfort and style.
                </p>
              </div>
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                      className="h-5 w-5"
                    >
                      <path d="m9 12 2 2 4-4" />
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    </svg>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-medium">Serena Sets</h3>
                    <p className="text-muted-foreground">
                      Matching top and shorts sets with feminine ruffle details and square necklines.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m7 10 2 2 6-6" />
                    </svg>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-medium">Pastel Colors</h3>
                    <p className="text-muted-foreground">
                      Available in soft pink and lavender colors for a feminine and elegant look.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                      className="h-5 w-5"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    </svg>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-medium">Mix & Match</h3>
                    <p className="text-muted-foreground">
                      Individual tops and shorts available for mixing and matching to create your perfect look.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Shop Now</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/images/product-2.png"
              alt="COMFYHUG collection"
              width={550}
              height={550}
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-contain sm:w-full"
            />
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

