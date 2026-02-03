import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-8 py-16 bg-gray-100">
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
      </div>
    </>
  );
}
