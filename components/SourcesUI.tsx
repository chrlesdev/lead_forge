"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function SourcesUI() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const cards = [
    { header: "Organic Search", image: "/organicSearch.svg" },
    { header: "Paid Advertising", image: "/payment.svg" },
    { header: "Social Media", image: "/social.svg" },
    { header: "Referrals", image: "/referals.svg" },
    { header: "Direct Traffic", image: "/traffic.svg" },
    { header: "Campaign Links", image: "/campaign.svg" },
  ];

  if (isLoading) {
    return (
      <main className="bg-white">
        <section className="px-8 py-24 max-w-7xl mx-auto space-y-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-12 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            <div className="flex-1 w-full">
              <Skeleton className="h-[350] w-full rounded-3xl" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-12 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            <div className="flex-1 w-full">
              <Skeleton className="h-[350] w-full rounded-3xl" />
            </div>
          </div>
        </section>

        <section className="px-8 py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Skeleton className="h-10 w-64 mx-auto" />
              <Skeleton className="h-4 w-96 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6 flex flex-col items-center gap-4 bg-white border-none">
                  <Skeleton className="w-16 h-16 rounded-2xl" />
                  <Skeleton className="h-4 w-20" />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="px-8 py-24 max-w-7xl mx-auto space-y-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
              Attribution
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Know Where Every Lead Comes From</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every lead has a story. LeadForge tracks how visitors arrive at your website — whether through ads, search engines, or direct visits — so you always know exactly what&apos;s working and what&apos;s not.
            </p>
          </div>
          <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
            <Image height={400} width={500} alt="Source tracking" src="/sources-hero.svg" className="w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
              Strategy
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Stop Guessing. Start Focusing.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              When lead sources are unclear, marketing decisions become guesswork. LeadForge removes uncertainty by showing which channels bring meaningful engagement, allowing teams to focus time and budget where it actually pays off.
            </p>
          </div>
          <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
            <Image height={400} width={500} alt="Data focus" src="/focus.svg" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Common Lead Sources We Track</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">LeadForge automatically categorizes leads based on their entry point without manual setup or complex tools.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cards.map((item, index) => (
              <Card key={index} className="group border border-slate-200 bg-white hover:border-blue-500 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    <Image height={40} width={40} alt={item.header} src={item.image} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-tight">{item.header}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
