import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building2 } from "lucide-react";
import { BarChart3, RefreshCw, ShieldCheck, Zap } from "lucide-react";

export default function DashboardUI() {
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

  return (
    <main>
      <div className="flex items-center px-8 py-20 gap-10">
        <div className="flex-1 space-y-5 p-5">
          <h2 className="text-4xl font-bold leading-tight">Turn Visitors Into Qualified Leads</h2>

          <p className="text-gray-600 max-w-md">Lead Forge helps businesses capture, qualify, and convert website visitors into real sales opportunities.</p>

          <div className="flex gap-4">
            <button className="px-5 py-2 bg-black text-white rounded-md">Get Started</button>
            <button className="px-5 py-2 border rounded-md">See Demo</button>
          </div>
        </div>

        <figure className="flex-1 flex justify-center">
          <Image height={560} width={560} src="/company.svg" alt="Lead generation illustration" />
        </figure>
      </div>
      <section className="py-24 bg-slate-50">
        <div className="container px-8 mx-auto flex flex-col items-center gap-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Trusted by 100+ Growing Businesses</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Teams across industries rely on LeadForge to capture and convert high-quality leads.</p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 opacity-70">
            {companies.map((name) => (
              <div key={name} className="flex items-center justify-center gap-2 group cursor-default">
                <Building2 className="w-5 h-5 text-gray-600 group-hover:text-gray-600 transition-colors" />

                <span className="text-lg font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">{name}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mt-10" />
        </div>
      </section>

      <div className="flex flex-col items-center px-8 py-20 gap-10">
        <div className="text-center space-y-4 max-w-2xl">
          <h2 className="text-3xl font-bold">Built to Solve Real Lead Problems</h2>
          <p className="text-gray-600 text-lg">Stop wasting time on manual data entry and bad emails. Lead Forge gives you the tools to focus on closing deals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {features.map((item, index) => (
            <Card key={index} className="border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.colorClass}`}>{item.icon}</div>
                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
