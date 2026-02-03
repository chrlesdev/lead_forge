import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between px-8 py-4">
        <Link href={"/"}>
          <h1 className="font-semibold text-lg">Lead Forge Demo.</h1>
        </Link>

        <nav className="flex items-center gap-8 px-8 py-3 bg-gray-200 rounded-full">
          {["Home", "Features", "Sources", "Pricing", "Help"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-black">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <button className="px-5 py-2 bg-black text-white rounded-md">Get Started</button>
          <button className="px-5 py-2 border rounded-md">See Demo</button>
        </div>
      </header>

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
          <Image height={360} width={360} src="/company.svg" alt="Lead generation illustration" />
        </figure>
      </div>
      <footer className="px-8 py-16 bg-gray-100">
        <div className="grid grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-semibold text-lg">LeadForge</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">Turning website traffic into qualified business leads.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Features</li>
              <li>Lead Capture</li>
              <li>Integrations</li>
              <li>Analytics</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Case Studies</li>
              <li>API Reference</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between text-sm text-gray-500">
          <p>© 2026 LeadForge Demo. All rights reserved.</p>

          <Link href="https://github.com/chrlesdev" className="hover:text-black transition">
            GitHub
          </Link>
        </div>
      </footer>
    </main>
  );
}
