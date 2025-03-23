import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what people are saying about COMFYHUG.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                "I've never experienced such comfort in homewear before. The hidden padding is a game-changer for
                working from home. Looks professional on video calls but feels like I'm wearing pajamas!"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Customer"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium">Sarah J.</p>
                <p className="text-sm text-muted-foreground">Remote Worker</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                "The quality is exceptional. I've washed my COMFYHUG pieces dozens of times and they still look brand
                new. The hidden padding hasn't lost its shape at all. Worth every penny!"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Customer"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium">Michael T.</p>
                <p className="text-sm text-muted-foreground">Quality Enthusiast</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="h-5 w-5 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                "As someone with chronic back pain, finding comfortable clothes that don't look medical has been a
                challenge. COMFYHUG's hidden padding provides the support I need without sacrificing style."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Customer"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium">Elena R.</p>
                <p className="text-sm text-muted-foreground">Comfort Seeker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

