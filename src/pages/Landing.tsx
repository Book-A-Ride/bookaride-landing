import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import MissionVision from "../components/MissionVision";
import ModeOfOperations from "../components/ModeOfOperations";
import Team from "../components/Team";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function Landing() {
  useDocumentMeta({
    title: "Book A Ride | Safe Student Rides in Ikere-Ekiti",
    description:
      "Book A Ride is BOUESTI's student-focused ride booking system. Schedule rides in advance, request an immediate pickup, and travel safely with verified drivers between campus and Ikere town.",
    path: "/",
  });
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <MissionVision />
        <ModeOfOperations />
        <Team />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
