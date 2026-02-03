import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4">
        <Link href={"/"}>
          <h1 className="font-semibold text-lg">Lead Forge Demo.</h1>
        </Link>

        <nav className="flex items-center gap-8 px-8 py-3 bg-gray-200 rounded-full ">
          <Link href={"/"} className="text-sm font-medium text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href={"/features"} className="text-sm font-medium text-gray-700 hover:text-black">
            Feature
          </Link>
          <Link href={"/pricing"} className="text-sm font-medium text-gray-700 hover:text-black">
            Pricing
          </Link>
          <Link href={"/sources"} className="text-sm font-medium text-gray-700 hover:text-black">
            Sources
          </Link>
          <Link href={"/help"} className="text-sm font-medium text-gray-700 hover:text-black">
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
