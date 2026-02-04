import Dashboard from "./dashboard/page";

import Navbar from "@/components/NavbarUI";
import Footer from "@/components/FooterUI";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Dashboard />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
