import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 sticky top-0 z-50 bg-white border-b">
        <Link href={"/"}>
          <h1 className="font-semibold text-lg">Lead Forge Demo.</h1>
        </Link>

        <nav className="flex items-center gap-8 px-8 py-3 bg-gray-200 rounded-full ">
          <Link href={"/"} className="text-md font-medium text-gray-700 px-4 py-1 transition-colors hover:text-black hover:bg-gray-400 rounded-full">
            Home
          </Link>
          <Link href={"/features"} className="text-md font-medium text-gray-700 px-4 py-1 transition-colors hover:text-black hover:bg-gray-400 rounded-full">
            Features
          </Link>
          <Link href={"/pricing"} className="text-md font-medium text-gray-700 px-4 py-1 transition-colors hover:text-black hover:bg-gray-400 rounded-full">
            Pricing
          </Link>
          <Link href={"/sources"} className="text-md font-medium text-gray-700 px-4 py-1 transition-colors hover:text-black hover:bg-gray-400 rounded-full">
            Sources
          </Link>
          <Link href={"/help"} className="text-md font-medium text-gray-700 px-4 py-1 transition-colors hover:text-black hover:bg-gray-400 rounded-full">
            Help
          </Link>
        </nav>

        <div className="flex gap-3">
          <button className="px-5 py-2 bg-black text-white rounded-md">Get Started</button>
          <button className="px-5 py-2 border rounded-md">See Demo</button>
        </div>
      </header>
    </>
  );
}
