import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Story</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  COMFYHUG was born from a simple idea: homewear should be both stylish and genuinely comfortable.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our founder, after years of struggling to find homewear that didn't sacrifice style for comfort,
                  developed our signature hidden padding technology. This innovation provides extra cushioning and
                  support exactly where needed, without the bulky appearance of traditional padded clothing.
                </p>
                <p>
                  What started as a small collection in 2018 has grown into a beloved brand, trusted by thousands who
                  value both aesthetics and genuine comfort in their everyday lives.
                </p>
              </div>
            </div>
            <Image
              alt="COMFYHUG founder"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={500}
              src="/placeholder.svg"
              width={500}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                To redefine comfort in homewear through innovative design and premium materials.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Comfort First</h3>
                <p className="text-muted-foreground">
                  We believe that true comfort shouldn't come at the expense of style. Our hidden padding technology
                  ensures you feel supported without compromising aesthetics.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  We're committed to ethical manufacturing and sustainable materials, ensuring our comfort doesn't come
                  at the cost of our planet.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Inclusive Design</h3>
                <p className="text-muted-foreground">
                  Our products are designed for all body types, with sizes and styles that make everyone feel confident
                  and comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <Image
              alt="COMFYHUG team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height={500}
              src="/placeholder.svg"
              width={500}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  At COMFYHUG, we're guided by core principles that shape everything we do.
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
                    <h3 className="text-xl font-bold">Quality</h3>
                    <p className="text-muted-foreground">
                      We never compromise on materials or craftsmanship, ensuring every COMFYHUG product lasts.
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
                    <h3 className="text-xl font-bold">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously refine our hidden padding technology to provide the best comfort experience
                      possible.
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
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Community</h3>
                    <p className="text-muted-foreground">
                      We value the relationships we build with our customers and strive to create products that enhance
                      their daily lives.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button>Shop Our Collection</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Serve</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                COMFYHUG is designed for those who refuse to compromise between comfort and style.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  alt="Home workers"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Remote Workers</h3>
                  <p className="text-muted-foreground">
                    For those who need to look professional on video calls while staying comfortable all day.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  alt="Comfort seekers"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comfort Enthusiasts</h3>
                  <p className="text-muted-foreground">
                    For those who prioritize feeling good in their clothes without sacrificing style.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  alt="Active lifestyle"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Active Lifestyles</h3>
                  <p className="text-muted-foreground">
                    For those who need versatile clothing that transitions seamlessly between activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

