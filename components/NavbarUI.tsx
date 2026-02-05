"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import Link from "next/link";
import { Hammer, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Sources", href: "/sources" },
  ];

  if (isLoading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="h-5 w-24" />
          </div>

          <div className="hidden md:flex items-center gap-2 p-1 bg-gray-50 border border-gray-100 rounded-full px-2">
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-7 w-16 rounded-full" />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-3">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-28 rounded-lg" />
            </div>

            <div className="md:hidden">
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-black text-white p-1.5 rounded-lg group-hover:bg-gray-800 transition-colors">
            <Hammer className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">Lead Forge</span>
        </Link>

        {/* Desktop Navigation (Pill) */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-gray-100/50 border border-gray-200 rounded-full">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="px-4 py-1.5 text-sm font-medium text-gray-600 rounded-full transition-all duration-200 hover:text-black hover:bg-gray-300 hover:shadow-sm">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">See Demo</button>
            <button className="px-5 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-all">Get Started</button>
          </div>

          {/* Burger Menu (Mobile Only) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300] sm:w-[400]">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2">
                    <Hammer className="w-5 h-5" /> Lead Forge Demo
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-10 p-6 ">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className=" text-lg font-medium text-gray-800 hover:text-black hover:border-b-2 border-black w-fit pb-2">
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 mt-6">
                    <button className="w-full py-3 border rounded-lg font-medium">See Demo</button>
                    <button className="w-full py-3 bg-black text-white rounded-lg font-medium">Get Started</button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
