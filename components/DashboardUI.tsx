"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building2, BarChart3, RefreshCw, ShieldCheck, Zap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";

export default function DashboardUI() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Zero Code Setup",
      description: "Get up and running in less than 5 minutes. Paste one line of code and start capturing leads immediately.",
      icon: <Zap className="w-6 h-6" />,
      colorClass: "bg-blue-100 text-blue-600",
    },
    {
      title: "Spam Protection",
      description: "Stop cluttering your CRM with fake emails. We automatically filter bots and verify email validity.",
      icon: <ShieldCheck className="w-6 h-6" />,
      colorClass: "bg-green-100 text-green-600",
    },
    {
      title: "Instant Sync",
      description: "Don't leave data in silos. Push new leads directly to Slack, HubSpot, or Notion in real-time.",
      icon: <RefreshCw className="w-6 h-6" />,
      colorClass: "bg-purple-100 text-purple-600",
    },
    {
      title: "Lead Insights",
      description: "Know where your best customers are coming from with our built-in conversion analytics dashboard.",
      icon: <BarChart3 className="w-6 h-6" />,
      colorClass: "bg-orange-100 text-orange-600",
    },
  ];

  const companies = ["Northlane Systems", "Bluecrest Digital", "Atlas Ridge", "Virex Solutions", "LuminaWorks", "Stonefield Labs", "HexaCore", "Brightscale", "Ironleaf", "Cloudhaven", "NovaReach", "Peakflow"];

  if (isLoading) {
    return (
      <main className="px-8 py-20 max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
          <div className="flex-1">
            <Skeleton className="h-[400] w-full rounded-2xl" />
          </div>
        </div>

        <div className="space-y-8 text-center">
          <Skeleton className="h-8 w-64 mx-auto" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Turn Visitors Into <span className="text-blue-600">Qualified Leads</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Lead Forge helps businesses capture, qualify, and convert website visitors into real sales opportunities without writing a single line of backend code.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2">
                See Demo
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[600] lg:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors" />
              <Image height={600} width={600} src="/company.svg" alt="Lead generation illustration" className="relative drop-shadow-2xl animate-in fade-in zoom-in duration-700" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container px-8 mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">Trust & Reliability</h2>
            <h3 className="text-3xl font-bold text-gray-900">Trusted by 100+ Growing Businesses</h3>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
            {companies.map((name) => (
              <div key={name} className="flex items-center justify-center gap-3 group opacity-50 hover:opacity-100 transition-opacity cursor-default">
                <Building2 className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight">Built to Solve Real Lead Problems</h2>
            <p className="text-gray-500 text-lg">Stop wasting time on manual data entry and bad emails. Focus on what matters: closing deals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <Card key={index} className="border-none bg-slate-50 shadow-none hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${item.colorClass}`}>{item.icon}</div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
