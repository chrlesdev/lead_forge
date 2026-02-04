import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingUI() {
  const pricing = [
    {
      header: "Starter",
      subText: "For individuals and small teams",
      price: "100",
      button: "Get Started",
      isPopular: false,
      features: ["Lead capture forms", "Source tracking", "Centralized dashboard", "Basic lead management"],
    },
    {
      header: "Growth",
      subText: "For scaling teams converting daily",
      price: "300",
      button: "Start Growth Plan",
      isPopular: true,
      features: ["Everything in Starter", "Lead qualification", "Advanced filtering", "Team access (up to 5)", "Email support"],
    },
    {
      header: "Business",
      subText: "For established sales operations",
      price: "500",
      button: "Contact Sales",
      isPopular: false,
      features: ["Everything in Growth", "Higher lead limits", "Advanced analytics", "Custom fields", "Priority 24/7 support"],
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Plans that grow with you</h2>
          <p className="text-lg text-slate-600 max-w-2xl">Simple, transparent pricing. No hidden fees. Switch plans as your lead volume changes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
          {pricing.map((item, index) => (
            <Card key={index} className={`relative flex flex-col h-full transition-all duration-300 ${item.isPopular ? "border-blue-600 shadow-xl scale-105 z-10 bg-white" : "border-slate-200 shadow-sm hover:shadow-md bg-white/50"}`}>
              {item.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Most Popular</div>}

              <CardHeader className="pt-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">{item.header}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.subText}</p>
              </CardHeader>

              <CardContent className="grow flex flex-col items-center gap-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$</span>
                  <span className="text-6xl font-black text-slate-900 tracking-tight">{item.price}</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>

                {/* Features List */}
                <ul className="w-full space-y-4 mt-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-8 pt-4">
                <Button className={`w-full py-6 text-md font-semibold rounded-xl transition-all ${item.isPopular ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200" : "bg-slate-900 hover:bg-slate-800"}`}>{item.button}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ/Trust Hint */}
        <p className="mt-12 text-sm text-slate-400">All plans include a 14-day free trial. No credit card required.</p>
      </div>
    </section>
  );
}
