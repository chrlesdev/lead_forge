import Link from "next/link";
import { Hammer, Github, Twitter, Linkedin, Globe } from "lucide-react";

export default function Footer() {
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
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column - Wider on Desktop */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-black text-white p-1 rounded-md">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight">Lead Forge Demo</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">The modern engine for high-growth sales teams. Forge better relationships, capture better leads, and scale your business faster.</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link href="https://github.com/chrlesdev" className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>

              <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </Link>

              <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-4">{section.title}</h3>
              <ul className="space-y-3">
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
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
