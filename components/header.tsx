'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="flex items-center">
                <h1>ComfyHug</h1>
              </Link>
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium hover:underline"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:underline"
              >
                About
              </Link>
              <Link
                href="/help"
                className="text-sm font-medium hover:underline"
              >
                Help
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center">
          <h1>ComfyHug</h1>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          <Link
            href="/"
            className="font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-medium hover:underline underline-offset-4"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/help"
            className="font-medium hover:underline underline-offset-4"
          >
            Help
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] md:w-[300px] pr-8"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
