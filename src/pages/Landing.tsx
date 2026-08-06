import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import MissionVision from "../components/MissionVision";
import ModeOfOperations from "../components/ModeOfOperations";
import Team from "../components/Team";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

export default function Landing() {
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
