import Image from "next/image";

import Features from "./features/page";
import Pricing from "./pricing/page";
import Sources from "./sources/page";

import Navbar from "@/components/NavbarUI";
import Footer from "@/components/FooterUI";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="flex items-center px-8 py-20 gap-10">
        <div className="flex-1 space-y-5">
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
      <div className="flex flex-col items-center px-8 py-20 gap-6 bg-gray-300">
        <h2 className="text-2xl font-semibold">Trusted by 100+ Growing Businesses</h2>

        <p className="text-gray-600 text-center max-w-md">Teams across industries rely on LeadForge to capture and convert high-quality leads.</p>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium text-stone-600">
          {["Northlane Systems", "Bluecrest Digital", "Atlas Ridge", "Virex Solutions", "LuminaWorks", "Stonefield Labs", "HexaCore", "Brightscale", "Ironleaf", "Cloudhaven", "NovaReach", "Peakflow"].map((e) => (
            <span className="" key={e}>
              {e}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <h2 className="text-3xl font-bold">Built to Solve Real Lead Problems</h2>
      </div>

      <Features />
      <Pricing />
      <Sources />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
