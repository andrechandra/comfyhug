import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Join the COMFYHUG Family</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe to our newsletter for exclusive offers, new product alerts, and comfort tips.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our{" "}
              <a href="#" className="underline underline-offset-2">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

