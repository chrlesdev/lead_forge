"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import Link from "next/link";
import { Hammer, Globe, Send } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-4">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-52" />
              <div className="flex gap-4 mt-6">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="border border-slate-100 p-6 rounded-xl bg-slate-50/50 space-y-4">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: ["Features", "Lead Capture", "Integrations", "Analytics", "Pricing"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Documentation", "Case Studies", "API Reference"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-black text-white p-1.5 rounded-lg">
                <Hammer className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Lead Forge</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">The modern engine for high-growth sales teams. Forge better relationships, capture better leads, and scale faster.</p>
            <div className="flex gap-4">
              <Link href="https://github.com/chrlesdev" className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-500 hover:text-black text-sm transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-4">
            <Card className="border-slate-100 shadow-sm bg-slate-50/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-sm font-bold uppercase tracking-widest">Get in touch</CardTitle>
                <p className="text-xs text-slate-500">Have questions? Drop us a message.</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Email address" className="bg-white border-slate-200 focus-visible:ring-black" />
                <Textarea placeholder="Your message" className="bg-white border-slate-200 focus-visible:ring-black min-h-[80px] resize-none" />
                <Button className="w-full bg-black text-white hover:bg-gray-800 transition-all group">
                  Send Message
                  <Send className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-gray-400 text-xs">
              © {currentYear} LeadForge. Built by <span className="text-gray-600 font-medium cursor-pointer hover:underline">Charles</span>.
            </p>

            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-semibold text-green-700 uppercase tracking-tighter">Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
            <div className="flex items-center gap-1 hover:text-gray-600 cursor-pointer transition-colors">
              <Globe className="w-3 h-3" />
              <span>Indonesia (ID)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
