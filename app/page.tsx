import Image from "next/image";
import QuoteBoard from "./quotes/page";
import LandingPage from "./home/page";

export default function Home() {
  return (
    <div className="bg-orange-50">
      <LandingPage />
    </div>
  );
}
