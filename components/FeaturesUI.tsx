"use client";
import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

export default function FeaturesUI() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="px-8 py-24 bg-white">
        <div className="text-center mb-20 space-y-4">
          <Skeleton className="h-12 w-1/2 mx-auto" />
          <Skeleton className="h-6 w-1/3 mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-8 space-y-6 border border-slate-100 rounded-3xl bg-slate-50/50">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-3/4" />
              </div>
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-64 w-full rounded-xl" />
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto h-64 rounded-3xl">
          <Skeleton className="w-full h-full rounded-3xl" />
        </div>
      </section>
    );
  }
  const cardItem = [
    {
      header: "Source Attribution",
      subText: "Marketing Clarity",
      text: "Track where every lead comes from—organic, paid, or referrals. Stop guessing and start investing in what works.",
      image: "/sources.svg",
      color: "bg-blue-50",
    },
    {
      header: "Centralized Dashboard",
      subText: "Operational Efficiency",
      text: "Access all incoming leads in one clear view. Track status and details without digging through messy email threads.",
      image: "/dashboard.svg",
      color: "bg-purple-50",
    },
    {
      header: "Smart Lead Capture",
      subText: "Conversion Focused",
      text: "User-friendly forms designed to maximize engagement. Collect the right data at the perfect moment in the user journey.",
      image: "/forms.svg",
      color: "bg-orange-50",
    },
    {
      header: "Lead Qualification",
      subText: "High Intent Priority",
      text: "Identify quality prospects based on intent. Prioritize follow-ups for serious buyers and ignore the noise.",
      image: "/leader.svg",
      color: "bg-green-50",
    },
  ];

  return (
    <section className="px-8 py-24 bg-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Everything You Need to Scale</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">LeadForge provides the essential tools businesses need to capture, qualify, and manage inbound leads effectively.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cardItem.map((item, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-none bg-slate-50/50 group hover:bg-slate-50 transition-colors duration-300">
            <CardHeader className="p-8 pb-0">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{item.subText}</span>
                <CardTitle className="text-2xl font-bold text-slate-900">{item.header}</CardTitle>
              </div>
              <CardDescription className="pt-4 text-base text-gray-600 leading-relaxed">{item.text}</CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <div className={`rounded-xl border border-black/5 overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-[1.02] ${item.color}`}>
                <Image height={400} width={600} src={item.image} alt={item.header} className="w-full h-auto object-cover" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-24 max-w-4xl mx-auto text-center p-12 rounded-3xl bg-slate-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Built to Grow With Your Business</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">LeadForge is intentionally simple to start using, but flexible enough to scale. The system adapts to your workflow without adding unnecessary complexity.</p>
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-medium">Day 1 Value</span>
          </div>
          <div className="w-px h-4 bg-slate-700 mx-2 self-center" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm font-medium">Enterprise Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
