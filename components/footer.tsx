import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h1>ComfyHug</h1>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium ladies homewear for ultimate comfort and style.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="inline-block"
              >
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>

              <Link
                href="https://www.instagram.com/comfyhug.id"
                target="_blank"
                className="inline-block"
              >
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>

              <Link
                href="https://www.twitter.com"
                target="_blank"
                className="inline-block"
              >
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for new products and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[220px]"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} COMFYHUG. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Shipping Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Returns & Exchanges
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
